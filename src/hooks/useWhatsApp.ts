
export const useWhatsApp = (phoneNumber: string) => {
  const sendMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  const openChat = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
  };

  return { sendMessage, openChat };
};
