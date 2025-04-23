import { Trash2, X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser, deleteMessages } = useChatStore();
  const { onlineUsers } = useAuthStore();

  const handleDeleteChat = async () => {
    if (confirm("Are you sure you want to delete this chat?")) {
      await deleteMessages(selectedUser._id);
    }
  };

  return (
    <div className="p-4 border-b border-base-300 bg-gradient-to-r from-base-200/50 to-base-100">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="size-12 rounded-2xl relative ring-2 ring-primary/20 ring-offset-2 ring-offset-base-100 transform hover:rotate-3 transition-all">
              <img
                src={selectedUser.profilePic || "/avatar.png"}
                alt={selectedUser.fullName}
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {selectedUser.fullName}
            </h3>
            <p className="text-sm">
              <span className={`inline-block size-2 rounded-full mr-2 ${
                onlineUsers.includes(selectedUser._id) 
                  ? "bg-success animate-pulse" 
                  : "bg-base-content/20"
              }`} />
              {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={handleDeleteChat}
            className="btn btn-circle btn-ghost btn-sm hover:bg-error/10 hover:text-error transition-colors"
            title="Delete chat"
          >
            <Trash2 size={18} />
          </button>
          
          <button 
            onClick={() => setSelectedUser(null)}
            className="btn btn-circle btn-ghost btn-sm hover:bg-error/10 hover:text-error transition-colors"
          >
            <X />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
