import Image from "next/image";
export default function Courses() {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold my-8 ">Courses</h1>
        <p className="text-lg text-gray-600">
          Explore our wide range of courses and start learning today!
        </p>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">Course ABC</h2>
              <div>
                <Image
                  src="./abc.jpg"
                  alt="the author"
                  width={150}
                  height={150}
                />
              </div>
              <p className="text-gray-700 mb-4">
                Brief description of the course content and what students can
                expect to learn.
              </p>
              <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">
                View Course
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">Course joy</h2>
              <div>
                <Image src="./joy.png" alt="joy" width={150} height={150} />
              </div>
              <p className="text-gray-700 mb-4">
                Brief description of the course content and what students can
                expect to learn.
              </p>
              <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">
                View Course
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">Course 123</h2>
              <div>
                <Image
                  src="./123.png"
                  alt="Author123"
                  width={150}
                  height={150}
                />
              </div>
              <p className="text-gray-700 mb-4">
                Brief description of the course content and what students can
                expect to learn.
              </p>
              <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">
                View Course
              </button>
            </div>
          </div>
        </div>{" "}
      </div>{" "}
    </div>
  );
}
