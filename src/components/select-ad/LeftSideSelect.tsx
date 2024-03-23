const LeftSideSelect = () => {
  return (
    <div
      className={`md:w-[100%] lg:flex-1 h-[250px] xl:h-full  overflow-hidden flex-shrink-0 custom-transition `}
    >
      <iframe
        className="h-full w-full"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.173876283906!2d-122.08374978474199!3d37.422476979834715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbc93cf893933%3A0x4b192a2115e131e9!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1615794627853!5m2!1sen!2sus"
        // allowfullscreen
      ></iframe>
    </div>
  );
};

export default LeftSideSelect;
