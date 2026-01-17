const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Kristijan Angelovski. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with React • Hosted on AWS EC2 with Docker
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
