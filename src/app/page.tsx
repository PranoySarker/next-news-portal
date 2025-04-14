import Banner from "@/components/shared/Banner";
import NewsCard from "@/components/shared/NewsCard";

const Home = async () => {
  const data = await fetch(
    `https://newsdata.io/api/1/latest?apikey=${process.env.NEWS_API_KEY}`
  );
  const newsdata = await data?.json();
  const news = newsdata?.results;

  console.log(news);

  return (
    <div className="py-12">
      <Banner />

      <div className="my-12">
        <h2 className="text-2xl font-bold mb-8">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NewsCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
