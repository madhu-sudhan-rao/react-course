import PropTypes from "prop-types";

Card.propTypes = {
  userName: PropTypes.string,
  caste: PropTypes.string,

  // You can also define the default value for the prop here
  //   userName: PropTypes.string.isRequired,
  //   post: PropTypes.string,
};

Card.defaultProps = {
  userName: "Prabosss",
  post: "Shouryanga",
};

function Card({ userName, caste }) {
  // console.log('props: ', props);
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I ve seen scale on large
              teams. It s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{userName}</div>
            <div className="text-slate-700 dark:text-slate-500">{caste}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Card;
