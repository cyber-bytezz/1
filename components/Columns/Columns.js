import { useState, useEffect } from "react";
import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";

const ColumnData = [
  {
    id: uuid(),
    name: "Emily J.",
    handle: "@EmilyJ",
    avatar: "/images/avatar.png", // Placeholder URL for avatar
    content:
      "AI Tutor has completely transformed my learning experience. ",
  },
  {
    id: uuid(),
    name: "Emily J.",
    handle: "@EmilyJ",
    avatar: "/images/avatar.png", // Placeholder URL for avatar
    content:
      "AI Tutor has completely transformed my learning experience.",
  },
  {
    id: uuid(),
    name: "Emily J.",
    handle: "@EmilyJ",
    avatar: "/images/avatar.png",// Placeholder URL for avatar
    content:
      "AI Tutor has completely transformed my learning experience.",
  },
  {
    id: uuid(),
    name: "Emily J.",
    handle: "@EmilyJ",
    avatar: "/images/avatar.png",
    content:
      "AI Tutor has completely transformed my learning experience.",
  },
  {
    id: uuid(),
    name: "Emily J.",
    handle: "@EmilyJ",
    avatar: "/images/avatar.png",// Placeholder URL for avatar
    content:
      "AI Tutor has completely transformed my learning experience.",
  },
  {
    id: uuid(),
    name: "Emily J.",
    handle: "@EmilyJ",
    avatar: "/images/avatar.png",// Placeholder URL for avatar
    content:
      "AI Tutor has completely transformed my learning experience.",
  },
  {
    id: uuid(),
    name: "Emily J.",
    handle: "@EmilyJ",
    avatar: "/images/avatar.png",// Placeholder URL for avatar
    content:
      "AI Tutor has completely transformed my learning experience.",
  },
  {
    id: uuid(),
    name: "Emily J.",
    handle: "@EmilyJ",
    avatar: "/images/avatar.png",// Placeholder URL for avatar
    content:
      "AI Tutor has completely transformed my learning experience.",
  },
  {
    id: uuid(),
    name: "Emily J.",
    handle: "@EmilyJ",
    avatar: "/images/avatar.png",// Placeholder URL for avatar
    content:
      "AI Tutor has completely transformed my learning experience.",
  },
  {
    id: uuid(),
    name: "Emily J.",
    handle: "@EmilyJ",
    avatar: "/images/avatar.png",// Placeholder URL for avatar
    content:
      "AI Tutor has completely transformed my learning experience.",
  }
  // Add more testimonial data here as needed
];

export const Columns = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  useEffect(() => {
    const scrollAnimation = () => {
      const container = document.getElementById("testimonial-container");
      const cards = container.getElementsByClassName("testimonial-card");
      const cardWidth = cards[0].offsetWidth;
      const containerWidth = container.offsetWidth;
      const animationDuration = 10 * cards.length; // Adjust duration based on number of cards
      const keyframes = `
        @keyframes scrollAnimation {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${cardWidth * cards.length}px); }
        }
      `;

      const style = document.createElement("style");
      style.textContent = keyframes;
      document.head.appendChild(style);

      container.style.animation = `scrollAnimation ${animationDuration}s linear infinite`;
    };

    scrollAnimation();

    return () => {
      const style = document.querySelector("style");
      if (style) document.head.removeChild(style);
    };
  }, []);

  const handleShare = (content) => {
    // Logic to share the testimonial content
    console.log("Sharing:", content);
  };

  const handleViewProfile = (profileId) => {
    // Logic to view the profile
    console.log("Viewing profile:", profileId);
  };

  return (
    <SectionContainer
      id="testimonial-container"
      className="grid gap-x-8 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16"
      style={{ overflowX: "hidden", padding: "10px 0", textAlign: "center" }}
    >
      <div className="flex" style={{ whiteSpace: "nowrap", gap: "10px" }}>
        {ColumnData.map((item) => (
          <div
            id={item.id}
            key={item.id}
            className="testimonial-card rounded-xl bg-white border border-gray-200 shadow-lg p-6 flex flex-col justify-between relative transform transition-transform duration-500 ease-in-out inline-block"
            style={{
              minWidth: "300px",
              maxWidth: "300px",
              margin: "0", // Adjusted margin
              whiteSpace: "normal", // Allow text to wrap inside the card
            }}
          >
            <div className="flex items-center mb-2">
              <img
                src={item.avatar}
                alt="Avatar"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-medium text-black">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.handle}</p>
              </div>
            </div>
            <p className="text-gray-700 flex-grow">{item.content}</p>
            <div className="flex justify-between items-center mt-2"> {/* Adjusted margin */}
              <button
                onClick={() => handleViewProfile(item.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300 flex items-center"
              >
                <Icon icon="akar-icons:user" className="w-6 h-6 mr-2" />
                View Profile
              </button>
              <button
                onClick={() => handleShare(item.content)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow-md hover:bg-gray-300 transition-colors duration-300 flex items-center"
              >
                <Icon icon="ant-design:share-alt-outlined" className="w-6 h-6 mr-2" />
                Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};