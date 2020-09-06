/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Container from "../Global/Container";
import Heading from "../Global/Heading/Heading";
import FeaturesCard from "../Features/FeaturesCard";
import Features1 from "../../images/features1.svg";
import Features2 from "../../images/features2.svg";
import Features3 from "../../images/features3.svg";
import Features4 from "../../images/features4.svg";

const Features = () => {
    return (
        <section className="features" css={styles}>
            <Container>
                <Heading title="OUR SERVICES" info="We provide a s modern workout environment equipped with state-of-the-art gym equipments. Check us out!!" />
                <div className="featureWrapper">
                    <FeaturesCard featureImg={Features1} featureHeading="Weightlifting" featureInfo="We have qualified trainers and sessions that would fit your schedule." />
                    <FeaturesCard featureImg={Features2} featureHeading="Specific Muscles" featureInfo="We provide one-on-one or group trainings with discount." />
                    <FeaturesCard featureImg={Features3} featureHeading="Flex Your Muscles" featureInfo="We have starter and elite packages." />
                    <FeaturesCard featureImg={Features4} featureHeading="Cardio Exercises" featureInfo="We are open 24/7 through out the year." />
                </div>
            </Container>
        </section>
    )
}

const styles = css`
    width: 100%;
    background: #000;
    .container {
        padding: 150px 0;
        max-width: 1200px;
        .featureWrapper {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            width: 100%;
            padding: 80px 0 0 0;
        }
    }

    @media(max-width: 594px) {
        .container {
            .featureWrapper {
                display: flex;
                justify-content: center;
                margin: 0 auto;
                .featureCard {
                    margin: 40px 0 0 0;
                }
            }
        }
    }
`;

export default Features;