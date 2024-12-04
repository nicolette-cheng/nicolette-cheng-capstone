import SearchHeader from "../../components/SearchHeader/SearchHeader";
import RewardsList from "../../components/RewardsList/RewardsList";
import "./Rewards.scss";

const apiUrl = import.meta.env.VITE_API_URL;

import axios from "axios";
import { useState, useEffect } from "react";

export default function Rewards() {
  const [rewardItems, setRewardItems] = useState([]);
  const [filteredRewards, setFilteredRewards] = useState(rewardItems);
  const [search, setSearch] = useState("");

  useEffect(() => {
    generateRewardItems();
  }, []);

  const generateRewardItems = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/rewards`);
      setRewardItems(data);
      setFilteredRewards(data);
    } catch (error) {
      console.error("Error fetching rewards data:", error);
    }
  };

  const handleSearchInput = (event) => {
    event.preventDefault();
    const searchValue = event.target.value.toLowerCase();
    setSearch(searchValue);

    const filtered = rewardItems.filter(
      (item) =>
        item.reward_name.toLowerCase().includes(searchValue) ||
        item.description.toLowerCase().includes(searchValue)
    );
    setFilteredRewards(filtered);
  };

  return (
    <main className="rewards">
      <SearchHeader
        title="rewards"
        handleSearchInput={handleSearchInput}
        buttonLink="/rewards/add"
      />
      <div>
        <RewardsList rewardItems={filteredRewards} search={search} />
      </div>
    </main>
  );
}
