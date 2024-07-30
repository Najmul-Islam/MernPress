const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex justify-center py-6">
      <p>Copyright © {currentYear}</p>
    </footer>
  );
};
export default Footer;
