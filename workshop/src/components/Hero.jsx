const Hero = () => {
    return (
      <section
        className="h-[90vh] flex items-center 
      justify-start px-20"
        style={{
          backgroundImage: `url("8.jpeg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-start text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Store</h1>
          <p className="text-xl mb-8">
            Discover the best merchandise at unbeatable prices
          </p>
          <a
            href="/shop"
            className="bg-[#00ffdd] text-[#001effbd] py-3 px-6 rounded-full text-[16px] font-bold hover:bg-[#9d7cff]"
          >
            Shop Now
          </a>
        </div>
      </section>
    );
  };
  
  export default Hero;