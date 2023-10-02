import notFoundSrc from "../../assets/notFound.jpg";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  display: flex;
  ${
    "" /* background-color: rgb(9, 9, 121);
  background-repeat: no-repeat;
  background: linear-gradient(
    262deg,
    rgba(9, 9, 121, 1) 0%,
    rgba(2, 0, 36, 1) 1%
  ); */
  }
  background-color: #010116;
  height: 100vh;
  margin: auto;
  padding: 2rem;
  position: relative;
`;

export default function NotFound() {
  const navigate = useNavigate();

  const handleRedirection = () => {
    navigate(-1);
  };
  return (
    <Section>
      <div className="h-[500px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
        <span className="font-bold tracking-wide text-3xl">
          404 page not found
        </span>

        <img
          src={notFoundSrc}
          alt="404 : page not found"
          className=" w-80 mt-5 mb-3 rounded-xl"
        />

        <p className="text-[10px]">
          <a href="https://www.freepik.com/free-vector/page-found-concept-illustration_7887410.htm#query=404%20page%20found&position=2&from_view=keyword&track=ais">
            Image by storyset
          </a>{" "}
          on Freepik
        </p>

        <button
          onClick={handleRedirection}
          className="text-white bg-blue-700 font-medium rounded-lg text-sm px-8 py-2.5 text-center my-4"
        >
          Go back to Home
        </button>
      </div>
    </Section>
  );
}
