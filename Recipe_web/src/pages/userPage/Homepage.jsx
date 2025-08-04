
import Hero from '../../components/user/userHome/Hero'
import ShareRecipe from '../../components/user/userHome/ShareRecipe'
import TrendingRecipe from '../../components/user/UserHome/TrendingRecipe'
import Blog from '../../components/user/userHome/Blog'
import Explore_Recipe from '../../components/user/userHome/Explore_Recipe'
import Newsletter from '../../components/user/userHome/Newsletter'
import PopularCategories from '../../components/user/userHome/PopularCategories'

function Homepage() {
 
    return (
      <>

        <Hero/>
        <ShareRecipe/>
        <TrendingRecipe/>
        <Blog/>
        <Explore_Recipe/>
        <Newsletter/>
        <PopularCategories/>
       

      </>
    );
  }
  
  export default Homepage
  