import { motion } from "framer-motion";
import { useChatStore } from "../store/useChatStore";

import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-screen bg-base-200 glow-bg">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center pt-20 px-4"
      >
        <motion.div
          initial={{ scale: 0.98 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-base-100 rounded-lg shadow-lg w-full max-w-6xl h-[calc(100vh-8rem)]"
        >
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />

            {/* no logic touched */}
            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;
