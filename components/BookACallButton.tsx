"use client"

const BookACallButton = () => {
    const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
      e.preventDefault(); // Prevent default anchor behavior
      const targetSection = document.getElementById(sectionId);
  
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
  
    return (
      <div className="flex justify-center mt-6">
        <button
          onClick={(e) => scrollToSection(e, "calendar")}
          className="font-semibold text-white bg-green-300 hover:bg-green-100 border border-transparent hover:border-green-700 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
        >
          Arrange A Call
        </button>
      </div>
    );
  };
  
  export default BookACallButton;
  