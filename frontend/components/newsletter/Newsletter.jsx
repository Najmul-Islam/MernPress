const Newsletter = () => {
  return (
    <section className="bg-[#F3F3F3] bg-newsletter bg-cover bg-center py-12 md:py-24">
      <div className="container md:mx-auto flex justify-center items-center flex-col">
        <h2 className="text-center text-xl md:text-2xl font-bold">
          Get The Best Of All Hands Delivered To Your Inbox
        </h2>
        <p className="text-center font-extralight my-3">
          Subscribe to our newsletter and stay updated.
        </p>

        <form
          action=""
          className="my-10 w-10/12 flex flex-col sm:flex-row space-y-3 sm:space-x-6 sm:justify-center"
        >
          <input
            type="email"
            placeholder="Write your email here"
            className=" text-base bg-transparent outline-none border-b border-black placeholder:text-black w-full sm:max-w-[400px] placeholder:text-base"
          />
          <button
            type="submit"
            className="bg-black text-white py-3 px-8 text-base sm:w-auto"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};
export default Newsletter;
