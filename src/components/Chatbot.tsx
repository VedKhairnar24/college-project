
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg w-[300px] sm:w-[350px] overflow-hidden mb-4 animate-fade-in">
          <div className="bg-institute-blue text-white p-3 flex justify-between items-center">
            <h3 className="font-medium">Chat with Us</h3>
            <button onClick={toggleChat} className="text-white hover:text-institute-gold">
              <X size={18} />
            </button>
          </div>
          <div className="p-4 bg-gray-50 h-[300px] overflow-y-auto">
            <div className="bg-institute-blue text-white p-3 rounded-lg rounded-bl-none max-w-[80%] mb-3">
              Welcome to our site. If you need help, simply reply to this message, we are online and ready to help.
            </div>
          </div>
          <div className="p-3 border-t">
            <div className="flex">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-institute-blue"
              />
              <button className="bg-institute-blue text-white px-4 py-2 rounded-r-lg hover:bg-institute-gold transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <button 
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-colors duration-200"
        onClick={toggleChat}
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default Chatbot;
