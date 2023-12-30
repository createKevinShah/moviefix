import React, { useState } from "react";
import CustomButton from "../../Components/CustomButton";
import CustomCard from "../../Components/CustomCard";
import CustomModal from "../../Components/CustomModal";

export const Filters = ({ selectedFilter, setSelectedFilter }) => {
  const filterButtons = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Action",
    },
    {
      id: 3,
      name: "Comedy",
    },
    {
      id: 4,
      name: "Romance",
    },
    {
      id: 5,
      name: "Sci-Fi",
    },
  ];

  const handleClick = (id) => {
    if (selectedFilter.includes(id)) {
      setSelectedFilter(selectedFilter?.filter((item) => item !== id));
    } else {
      setSelectedFilter([...selectedFilter, id]);
    }
  };

  return (
    <div className="flex items-center justify-center flex-wrap gap-4">
      {filterButtons.map((button) => {
        return (
          <CustomButton
            key={button.id}
            text={button.name}
            isSelected={selectedFilter.includes(button.id)}
            onClick={() => handleClick(button.id)}
          />
        );
      })}
    </div>
  );
};

const MovieList = () => {
  const [movieModalVisible, setMovieModalVisible] = useState(false);
  const [movieDetails, setMovieDetails] = useState([]);

  const data = [
    {
      id: 1,
      title: "123",
      description: "123",
      ratings: "1 star",
    },
    {
      id: 2,
      title: "234",
      description: "234",
      ratings: "2 star",
    },
    {
      id: 3,
      title: "345",
      description: "345",
      ratings: "3 star",
    },
    {
      id: 4,
      title: "456",
      description: "456",
      ratings: "4 star",
    },
    {
      id: 5,
      title: "567",
      description: "567",
      ratings: "5 star",
    },
    {
      id: 6,
      title: "678",
      description: "678",
      ratings: "6 star",
    },
    {
      id: 7,
      title: "789",
      description: "789",
      ratings: "7 star",
    },
    {
      id: 8,
      title: "890",
      description: "890",
      ratings: "8 star",
    },
  ];

  const handleClick = (movie) => {
    setMovieDetails(movie);
    setMovieModalVisible(true);
  };

  return (
    <div className="mt-[100px] md:mt-[50px] py-[60px] md:py-[120px]">
      <div className="overflow-y-scroll scroll-hide pb-8 md:pb-10">
        <div className="mt-8 flex items-center justify-center gap-6 flex-wrap">
          {data.map((item) => {
            return (
              <div key={item}>
                <CustomCard
                  title={item.title}
                  description={item.description}
                  ratings={item.ratings}
                  onClick={() => handleClick(item)}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="">
        <CustomModal
          visible={movieModalVisible}
          onCancel={() => setMovieModalVisible(false)}
          movieDetails={movieDetails}
        />
      </div>
    </div>
  );
};

export default MovieList;
