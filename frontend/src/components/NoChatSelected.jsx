import { KawaiiElements } from "./KawaiiElements";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-gradient-to-br from-base-200/50 to-base-100">
      <div className="max-w-md text-center space-y-6">
        <div className="flex flex-col items-center gap-4">
          <div className="relative animate-bounce">
            <KawaiiElements.ChatBubble />
            <div className="absolute -top-4 -right-2">
              <KawaiiElements.KawaiiCloud />
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Welcome to Chatty!
        </h2>
        <p className="text-base-content/60 text-lg">
          Select a friend from the sidebar to start a kawaii conversation ✨
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
