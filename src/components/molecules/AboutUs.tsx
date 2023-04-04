import Image from "next/image";
import Image1 from "../../assets/images/Rectangle 9.png";
import Image2 from "../../assets/images/Rectangle 10.png";

const AboutUs = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-[#0E192E] text-center mt-3 lg:text-5xl sm:text-3xl">
        Tentang Kami
      </h2>
      <div className="flex flex-col justify-center p-3 sm:flex-row lg:mx-10 lg:p-5 sm:mt-3 sm:mx-5 sm:p-3">
        <Image
          src={Image1}
          alt="Logo"
          className="my-1 mx-auto w-[250px]
            h-[300px] lg:w-[400px] lg:h-[450px] sm:order-1"
        />
        <div className="sm:flex sm:flex-col sm:justify-center lg:p-5 sm:p-3">
          <h5 className="text-lg font-semibold text-[#0E192E] my-1 lg:text-4xl sm:text-2xl">
            Lorem ipsum dolor sit amet consectetur. Pharetra eget morbi nibh
            molestie. Et massa tellus at non lacus nec. Aliquam porttitor sem
            eros vitae. Netus ipsum sem tincidunt cursus.
          </h5>
          <p className="text-lg font-normal text-slate-600 my-1 lg:text-base sm:text-sm sm:my-3">
            Lorem ipsum dolor sit amet consectetur. Pharetra eget morbi nibh
            molestie. Et massa tellus at non lacus nec. Aliquam porttitor sem
            eros vitae. Netus ipsum sem tincidunt cursus.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-14 p-3 sm:flex-row lg:mx-10 lg:p-5 sm:p-3 sm:mx-5">
        <Image
          src={Image2}
          alt="Logo"
          className="my-1 mx-auto w-[250px] h-[300px] lg:w-[400px] lg:h-[450px] lg:-order-1"
        />
        <div className="sm:flex sm:flex-col sm:justify-center lg:p-5 sm:p-3">
          <h5 className="text-lg font-semibold text-[#0E192E] my-1 lg:text-4xl sm:text-2xl">
            Lorem ipsum dolor sit amet consectetur. Pharetra eget morbi nibh
            molestie. Et massa tellus at non lacus nec. Aliquam porttitor sem
            eros vitae. Netus ipsum sem tincidunt cursus.
          </h5>
          <p className="text-lg font-normal text-slate-600 my-1 lg:text-base sm:text-sm sm:my-3">
            Lorem ipsum dolor sit amet consectetur. Pharetra eget morbi nibh
            molestie. Et massa tellus at non lacus nec. Aliquam porttitor sem
            eros vitae. Netus ipsum sem tincidunt cursus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
