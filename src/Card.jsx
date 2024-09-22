import useScreenSize from './useScreenSize';
// eslint-disable-next-line react/prop-types
const Card = ({ adviceNumber, adviceText, fetchAdvice }) => {
  const screenSize = useScreenSize();

  const handleClick = () => {
    fetchAdvice(); // Call fetchAdvice to reload the advice
  };

  return (
    <div
      className={`relative ${
        screenSize.width <= 375 ? 'max-w-[330px]' : 'max-w-[450px]'
      } bg-dark-grayish-blue flex flex-col items-center p-6 rounded-2xl`}
    >
      <h3 className="text-neon-green mb-5 mt-6 tracking-widerest font-manrope font-bold">
        ADVICE #{adviceNumber}
      </h3>
      <p className="text-light-cyan font-manrope font-extrabold text-2.5xl text-center tracking-normal m-4 mb-6">
        &quot;{adviceText}&quot;
      </p>
      <img
        className="mb-10"
        src={
          screenSize.width <= 375
            ? 'src/assets/images/pattern-divider-mobile.png'
            : 'src/assets/images/pattern-divider-desktop.png'
        }
        alt="Divider"
      />
      <button onClick={handleClick}>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-neon-green p-5 rounded-full focus:outline-none transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_theme('colors.neon-green')]">
          <div className="relative z-10">
            <img src="src/assets/images/icon-dice.png" alt="Dice Icon" />
          </div>
        </div>
      </button>
    </div>
  );
};

export default Card;
