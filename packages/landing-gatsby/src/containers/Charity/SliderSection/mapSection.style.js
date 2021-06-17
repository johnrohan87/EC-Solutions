import styled from 'styled-components';

const SectionWrapper = styled.section`
  width: 100%;
  padding: 81px 0;
  @media only screen and (max-width: 1440px) {
    padding: 70px 0;
  }
  @media only screen and (max-width: 1360px) {
    padding: 45px 0 50px;
  }
  @media only screen and (max-width: 991px) {
    padding: 40px 0;
  }
`;

export const SectionHeader = styled.header`
  text-align: center;
  margin-bottom: 90px;
  @media only screen and (max-width: 1440px) {
    margin-bottom: 70px;
  }
  @media only screen and (max-width: 991px) {
    margin-bottom: 54px;
  }

  h2 {
    font-size: 50px;
    font-weight: 300;
    margin-bottom: 12px;
    @media only screen and (max-width: 1440px) {
      font-size: 36px;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 34px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 30px;
      margin-bottom: 10px;
    }
    @media only screen and (max-width: 767px) {
      font-size: 28px;
    }
  }

  p {
    font-size: 18px;
    line-height: 40px;
    margin-bottom: 0;
    @media only screen and (max-width: 1440px) {
      font-size: 16px;
      line-height: 32px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 15px;
      line-height: 28px;
    }
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const newCustomCss = `
.slider {
	position: relative;
	width: 100%;
	height: 400px;
	overflow: hidden
}

.slider a.previousButton, .slider a.nextButton {
	font-size: 22px;
	line-height: 0;
	display: block;
	position: absolute;
	top: 50%;
	-webkit-transform: translateY(-50%);
	        transform: translateY(-50%);
	-webkit-transition: all .3s linear;
	transition: all .3s linear;
	z-index: 1;
	color: #333;
	padding: 10px;
	text-decoration: none;
	-webkit-backface-visibility: hidden;
	        backface-visibility: hidden
	/* prevent jump effect when scaling */
}

.slider a.previousButton:not(.disabled):hover, .slider a.nextButton:not(.disabled):hover {
	-webkit-transform: translateY(-50%) scale(1.25);
	        transform: translateY(-50%) scale(1.25);
	cursor: pointer;
}

.slider a.previousButton {
	left: 20px;
}

.slider a.nextButton {
	right: 20px;
}

.slide {
	width: 100%;
	height: 100%;
	position: absolute;
	overflow: hidden
}

.slide.hidden {
	visibility: hidden;
}

.slide.previous {
	left: -100%;
}

.slide.current {
	left: 0;
}

.slide.next {
	left: 100%;
}

.slide.animateIn,
	.slide.animateOut {
	-webkit-transition: all 2s ease;
	transition: all 2s ease;
}

.slide.animateIn.previous,
		.slide.animateIn.next {
	left: 0;
	visibility: visible;
}

.slide.animateOut.previous {
	left: 100%;
}

.slide.animateOut.next {
	left: -100%;
}

///

&.current,
	&.animateIn {
		& h1, 
		& button,
		& p,
		& section * {
			transform: translateX(0);
			transition-delay: .9s;
			opacity: 1;
		}
	}

	& .inner {
		padding: 0 70px;
		box-sizing: border-box;
		position: absolute;
		width: 100%;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}

	& h1 {
		font-weight: 900;
		margin: 0 auto;
		max-width: 840px;
		color: #FFFFFF;
		font-size: 64px;
		line-height: 1;
		transition: all .3s ease;
		transform: translateY(-20px);
		opacity: 0;
	}

	& p {
		color: #FFFFFF;
		font-size: 14px;
		line-height: 1.5;
		margin: 20px auto 30px;
		max-width: 640px;
		transition: all .3s ease;
		transform: translateY(20px);
		opacity: 0;
	}

	& button {
		transition: all .3s ease;
		transform: translateY(20px);
		opacity: 0;
	}

	& section {
		position: absolute;
		bottom: 20px;
		left: 20px;

		& * {
			transition: all .3s ease;
		}

		& span {
			color: rgba(255, 255, 255, 0.5);
			font-size: 12px;
			display: inline-block;
			text-align: left;
			line-height: 1.4;
			vertical-align: middle;
			margin-left: 10px;
			transform: translateX(-10px);
			opacity: 0;

			& strong {
				color: #FFFFFF;
				font-size: 14px;
				display: block;
				transform: translateY(10px);
				opacity: 0;
			}
		}

		& img {
			width: 40px;
			height: 40px;
			border: solid 2px rgba(255, 255, 255, 0.5);
			border-radius: 100%;
			vertical-align: middle;
			transition: all .5s ease;
			transform: translateX(-20px);
			opacity: 0;
		}
	}
}
`;

export default SectionWrapper;
