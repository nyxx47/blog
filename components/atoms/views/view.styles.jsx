import styled from 'styled-components'
import breakpoints from '../../particles/breakpoints'

const isDisplayProperty = props => {

    switch(props.isEqualFlex){
        case "flex":
            return "flex";
            break;
        case "block":
            return "block";
            break;
        case "inline-block":
            return "inline-block";
            break;
        case "none":
            return "none";
            break;
        default: 
            return "flex"
            break
    }
}

const masked = props => {

    if(props.masked){
        return "hidden";
    }else{
        return "visible";
    }
}

export const StyledView = styled.div`
    display: ${props => isDisplayProperty(props)};
    flex-direction: ${props => props.direction};
    flex: ${props => props.flexValue ? '1': 'none'};
    justify-content: ${props => props.justify};
    align-items: ${props => !props.align ? 'none' : props.align};
    width: ${props => props.width};
    max-width: ${props => !props.maxWidth ? undefined : props.maxWidth};
    height: ${props => props.height};
    background-color: ${props => props.backgroundColor};
    border: ${props => !props.border ? undefined : props.border};
    border-radius: ${props => props.radius};
    box-shadow: ${props => props.isBoxShadow}; //10px 20px 50px rgba(149, 163, 180, 0.1);
    overflow: ${props => props.overflow};
    position: ${props => props.position};
    left: ${props => props.left};
    top: ${props => props.top};
    bottom: ${props => props.bottom};
    padding: ${props => props.padding};
    margin: ${props => props.margin};
    box-sizing: border-box;
    
    &.half {
        width: calc(50% - 40px);
        margin: 0 5px 10px 0;
        
        &:nth-child(2n) {
          margin: 0 0 10px 5px;
        }

        @media ${breakpoints.tablet} {
            width: 100%;
            margin: 0 5px 40px 0 !important;
            flex-direction: column;
        }
    }

    &.large {
        width: 100%;
        margin: 0 0 50px 0;
        display: flex;
        justify-content: space-between;

        @media ${breakpoints.tablet} {
            flex-direction: column;
        }
    }

    &.semi-half {
        width: calc(70% - 50px);
        margin: 0 5px 10px 0;
        
        &:nth-child(2n) {
          width:30%;
          margin: 0 0 10px 5px;

          @media ${breakpoints.tablet} {
                width: 100%;
            }
        }

        @media ${breakpoints.tablet} {
            width: 100%;
        }
    }

    &.grid-item-12 {
        height: auto;
        flex-basis: 100%;
        -ms-flex: auto;
        width: 259px;
        position: relative;
        padding: 10px;
        box-sizing: border-box;
        margin-bottom:50px;
    }

    &.grid-item-11 {
        height: auto;
        flex-basis: 91.66%;
        -ms-flex: auto;
        width: 259px;
        position: relative;
        padding: 10px;
        box-sizing: border-box;
        margin-bottom:50px;
    }

    &.grid-item-10 {
        height: auto;
        flex-basis: 83.33%;
        -ms-flex: auto;
        width: 259px;
        position: relative;
        padding: 10px;
        box-sizing: border-box;
        margin-bottom:50px;
    }

    &.grid-item-9 {
        height: auto;
        flex-basis: 75%;
        -ms-flex: auto;
        width: 259px;
        position: relative;
        padding: 10px;
        box-sizing: border-box;
        margin-bottom:50px;
    }

    &.grid-item-8 {
        height: auto;
        flex-basis: 66.66%;
        -ms-flex: auto;
        width: 259px;
        position: relative;
        padding: 10px;
        box-sizing: border-box;
        margin-bottom:50px;
    }

    &.grid-item-7 {
        height: auto;
        flex-basis: 58.33%;
        -ms-flex: auto;
        width: 259px;
        position: relative;
        padding: 10px;
        box-sizing: border-box;
        margin-bottom:50px;
    }

    &.grid-item-6 {
        height: auto;
        flex-basis: 50%;
        -ms-flex: auto;
        width: 259px;
        position: relative;
        padding: 10px;
        box-sizing: border-box;
        margin-bottom:50px;
    }

    &.grid-item-5 {
        height: auto;
        flex-basis: 41.66%;
        -ms-flex: auto;
        width: 259px;
        position: relative;
        padding: 10px;
        box-sizing: border-box;
        margin-bottom:50px;
    }

    &.grid-item-4 {
        height: auto;
        flex-basis: 33.33%;
        -ms-flex: auto;
        width: 259px;
        position: relative;
        padding: 10px;
        box-sizing: border-box;
        margin-bottom:50px;
    }

    &.grid-item-3 {
        height: auto;
        flex-basis: 25%;
        -ms-flex: auto;
        width: 259px;
        position: relative;
        padding: 10px;
        box-sizing: border-box;
        margin-bottom:50px;
    }

    &.grid-item-2 {
        height: auto;
        flex-basis: 16.66%;
        -ms-flex: auto;
        width: 259px;
        position: relative;
        padding: 10px;
        box-sizing: border-box;
        margin-bottom:50px;
    }

    &.grid-item-1 {
        height: auto;
        flex-basis: 8.33%;
        -ms-flex: auto;
        width: 259px;
        position: relative;
        padding: 10px;
        box-sizing: border-box;
        margin-bottom:50px;
    }

    &.section{
        padding: 0px 100px 0px 100px;
    }

      @media ${breakpoints.laptopL} {
        &.grid-item {
          flex-basis: 33.33%;
        }
      }

      @media ${breakpoints.laptop} {
        .grid-item {
          flex-basis: 33.33%;
        }
      }

      @media ${breakpoints.tablet} {
        padding: ${props => props.isPadding};

        &.grid-item-4{
            flex-basis: 50%;
        }

        &.grid-item-3{
            flex-basis: 100%;
        }

        &.grid-item {
          flex-basis: 50%;
        }

        &.section{
            padding: 0px 20px 0px 20px !important;
        }
      }

      
    @media ${breakpoints.mobileL} {
        width: ${props => !props.isEqualWidth ? undefined : props.isEqualWidth} !important;
        height: ${props => !props.isEqualHeight ? undefined : props.isEqualHeight} !important;
        background-color: ${props => props.isEqualBackground};
        flex-direction: ${props => props.isEqualDirection};

        &.grid-item {
          flex-basis: 100%;
        }
    }
`

export default StyledView