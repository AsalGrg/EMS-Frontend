import { Link } from "react-router-dom";

export const CategoriesToDisplay = [
  <Link to={`/category/music`}>
    <div
      style={{
        textDecoration: "none",
      }}
    >
      <div className="border rounded-circle p-4">
        <img src="/category svgs/music.svg" alt="" />
      </div>

      <p className="text-center mt-2">Music</p>
    </div>
  </Link>,

  <Link to="/category/nightlife">
    <div>
      <div className="border rounded-circle p-4">
        <img src="/category svgs/hello.svg" alt="" />
      </div>
      <p className="text-center mt-2">Nightlife</p>
    </div>
  </Link>,
  <Link to="/category/health">
    <div>
      <div className="border rounded-circle p-4">
        <img src="/category svgs/health.svg" alt="" />
      </div>

      <p className="text-center mt-2">Health</p>
    </div>
  </Link>,

  <Link to="/category/hobbies">
    <div>
      <div className="border rounded-circle p-4">
        <img src="/category svgs/hobby.svg" alt="" />
      </div>

      <p className="text-center mt-2">Hobbies</p>
    </div>
  </Link>,
  <Link to="/category/business">
    <div>
      <div className="border rounded-circle p-4">
        <img src="/category svgs/business.svg" alt="" />
      </div>

      <p className="text-center mt-2">Business</p>
    </div>
  </Link>,

  <Link to="/category/fashion">
    <div>
      <div className="border rounded-circle p-4">
        <img src="/category svgs/fashion.svg" alt="" />
      </div>

      <p className="text-center mt-2">Fashion</p>
    </div>
  </Link>,

  <Link to="category/Food & Drinks">
    <div>
      <div className="border rounded-circle p-4">
        <img src="/category svgs/food.svg" alt="" />
      </div>

      <p className="text-center mt-2">Food & Drinks</p>
    </div>
  </Link>,
];
