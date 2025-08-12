const Footer = () => {

  const footerData = [
    {
      title: "Services",
      links: [
        "Product Support",
        "Order Tracking",
        "Shipping & Delivery",
        "Returns",
      ],
    },
    {
      title: "Company",
      links: ["About us", "Careers", "Contact"],
    },
    {
      title: "Legal",
      links: ["Terms of use", "Privacy policy", "Cookie policy"],
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center mt-20 -mx-[145px]">
      {/* Footer heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-indigo-600">Gadget Heaven</h2>
        <p className="text-gray-600">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>

      {/* Footer Navigation */}
      <footer className="footer bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white justify-around py-8 px-4  shadow-md">
        {footerData.map((section, index) => (
          <nav key={index} className="space-y-3">
            <h6 className="text-lg font-semibold border-b-2 border-white pb-1">
              {section.title}
            </h6>
            {section.links.map((link, idx) => (
              <a
                key={idx}
                className="link link-hover text-gray-200 hover:text-yellow-300 transition duration-300 block"
                href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link}
              </a>
            ))}
          </nav>
        ))}
      </footer>

      {/* Footer Bottom */}
      <div className="text-center text-white bg-gray-700 py-4 w-full">
        <p>&copy; {new Date().getFullYear()} Gadget Heaven. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
