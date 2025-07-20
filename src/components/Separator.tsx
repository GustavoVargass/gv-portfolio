const Separator = () => {
    return (
      <div className="w-full my-12 md:my-20 flex justify-center">
        <img
          src="/separators/bat.svg"
          alt="Bat Separator"
          className="w-20 h-20 transition-transform duration-500 hover:scale-110"
          style={{
            filter: "drop-shadow(0 0 10px #FFD700)",
          }}
        />
      </div>
    );
  };
  
  export default Separator;
  