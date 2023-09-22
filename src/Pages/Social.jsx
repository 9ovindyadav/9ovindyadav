import { useEffect, useState } from "react";
import "../scss/social.scss"

export const Social = () => {
    return (
        <>
        <div className="social-section">
            <h1>Twitter tweets</h1>
            <div className="twitter">
            <a class="twitter-timeline" href="https://twitter.com/9ovindyadav?ref_src=twsrc%5Etfw">Tweets by 9ovindyadav</a>
            </div>
        </div>

        <div className="social-section">
        <h1>Latest Instagram Posts</h1>
            <div className="insta">

                <Instagram />
            </div>
        </div>
        </>
    )
}


const Instagram = () => {

  const [profileData, setProfileData] = useState(null);
  console.log(profileData);
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url&access_token=${import.meta.env.VITE_INSTA_TOKEN}&limit=10`
        );
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfileData();
  }, []);

  const media = ["IMAGES"]
  // Render the fetched profile data
  return (
    <div>
      <div className="post-grid">
        {/* Display post thumbnails */}
        {profileData?.data.map((post) => (
            post.media_type === "IMAGE" || post.media_type === "CAROUSEL_ALBUM" && <img
            key={post.id}
            className="post-thumbnail"
            src={post.media_url}
            alt={post.caption}
          /> 
        ))}
      </div>
    </div>
  );

}