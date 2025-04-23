import { useState } from 'react';
import { UserPlus, Copy, Check } from 'lucide-react';
import toast from 'react-hot-toast';
import { axiosInstance } from '../lib/axios';

const InviteButton = () => {
  const [inviteLink, setInviteLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const generateInvite = async () => {
    try {
      setIsLoading(true);
      const { data } = await axiosInstance.post('/auth/generate-invite');
      setInviteLink(data.inviteLink);
    } catch {
      toast.error('Failed to generate invite link');
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(inviteLink);
      setIsCopied(true);
      toast.success('Invite link copied!');
      setTimeout(() => setIsCopied(false), 3000);
    } catch {
      toast.error('Failed to copy link');
    }
  };

  return (
    <div className="relative">
      <button
        onClick={generateInvite}
        className="btn btn-primary btn-sm gap-2"
        disabled={isLoading}
      >
        <UserPlus className="h-4 w-4" />
        <span>Invite Friends</span>
      </button>

      {inviteLink && (
        <div className="absolute top-full mt-2 right-0 w-80 p-3 bg-base-200 rounded-lg shadow-lg">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={inviteLink}
              readOnly
              className="input input-sm input-bordered flex-1 text-xs"
            />
            <button
              onClick={copyToClipboard}
              className="btn btn-square btn-sm btn-ghost"
            >
              {isCopied ? (
                <Check className="h-4 w-4 text-success" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>
          <p className="text-xs mt-2 text-base-content/60">
            This invite link will expire in 7 days
          </p>
        </div>
      )}
    </div>
  );
};

export default InviteButton;