import { NavLink } from "react-router-dom";

const BoostNavbar = () => {
  const boostLinks = [
    { _id: 0, title: "Rank Boost", link: "/boosting/rank-boost" },
    { _id: 1, title: "Win Boost", link: "/boosting/win-boost" },
    { _id: 2, title: "Placements Boost", link: "/boosting/placement-boost" },
    { _id: 3, title: "Arena Boost", link: "/boosting/arena-boost" },
    { _id: 4, title: "Normal Matches", link: "/boosting/normal-matches" },
    { _id: 5, title: "Split 2 Boost", link: "/boosting/split2-boost" },
    { _id: 6, title: "Champion Mastery", link: "/boosting/champion-mastery" },
    { _id: 7, title: "Boost Packages", link: "/boosting/boost-packages" },
  ];
  return (
    <div className="flex flex-nowrap overflow-hidden gap-4">
      {boostLinks.map((d: any, index: number) => (
        <NavLink
          key={index}
          to={d.link}
          className={({ isActive }) =>
            `whitespace-nowrap px-4 py-2 rounded-md bg-opacity-50 shadow-md ${
              isActive ? "bg-gray-700" : "hover:bg-gray-700"
            }`
          }
        >
          {d.title}
        </NavLink>
      ))}
    </div>
  );
};
export default BoostNavbar;
