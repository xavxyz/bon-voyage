// @flow
import * as React from 'react';
import styled from 'styled-components';

const RAYS: number = 13;
const ANGLE: number = 180 / (RAYS - 1);

export default function Hero() {
  return (
    <Positioner>
      <TimelineRestart transitionDuration={0.6}>
        {({ onClick, style }) => (
          <Svg
            style={style}
            viewBox="0 0 480 300"
            xmlns="http://www.w3.org/2000/svg"
            role="presentation"
          >
            <title>
              Animated tree showing up with the sun behind drawn with lines
            </title>
            <AxialSymetry>
              <DrawnPath
                id="Mountain__Large"
                d="M144.74 244l37.38-54 37.39 54H48"
                pathLength={302.9}
                duration={1.2}
              />
              <DrawnPath
                id="Mountain__Small"
                d="M123 244l24.92-36 24.93 36"
                pathLength={87.6}
                duration={0.6}
                delay={0.8}
              />
            </AxialSymetry>
            <CentralSymetry repeat={RAYS} angle={ANGLE}>
              <DrawnPath
                id="Ray__Main"
                d="M124 244H48"
                pathLength={76}
                duration={0.8}
                delay={1.2}
              />
              <DrawnPath
                id="Ray__Tip"
                d="M41 244h-9"
                pathLength={9}
                duration={0.1}
                delay={2}
              />
            </CentralSymetry>
            <CentralSymetry repeat={RAYS - 1} angle={ANGLE} offset={ANGLE / 2}>
              <DrawnPath
                id="Ray__Separator"
                d="M124 244H86"
                pathLength={38}
                duration={0.3}
                delay={1.2}
              />
            </CentralSymetry>
            <ClickablePath onClick={onClick}>
              <ScaledPath
                id="Tree__Evergreen"
                d="M261 217h-42l21-64z"
                duration={0.6}
                delay={1.9}
                x={0}
                y={0}
                style={{
                  fill: '#0D9',
                  strokeWidth: 0,
                  transformOrigin: '240px 215px',
                }}
              />
            </ClickablePath>
            <DrawnPath
              id="Tree__Trunk"
              pathLength={9}
              duration={0.1}
              delay={1.8}
              style={{ stroke: '#0D9' }}
              d="M240 231v-9"
            />

            <ScaledPath
              d="M116 258h248"
              id="Baseline"
              // only scale the line on the X axis
              y={1}
              duration={0.6}
              delay={1.7}
            />
          </Svg>
        )}
      </TimelineRestart>
    </Positioner>
  );
}

function CentralSymetry({
  children,
  angle,
  repeat,
  offset = 0,
}: {
  children: React.Node,
  angle: number,
  repeat: number,
  offset?: number,
}) {
  return Array.from({ length: repeat }, (_, index) =>
    React.Children.map(children, kid => (
      <g style={{ transform: `rotate(${offset + angle * index}deg)` }}>{kid}</g>
    ))
  );
}

function AxialSymetry({ children }: { children: React.Node }) {
  return React.Children.map(children, kid => (
    <>
      {kid}
      <g style={{ transform: 'scale(1, -1) rotate(180deg)' }}>{kid}</g>
    </>
  ));
}

function ScaledPath({
  d,
  duration,
  delay = 0,
  style = {},
  x = 0,
  y = 0,
  ...rest
}: {
  d: string,
  duration: number,
  delay?: number,
  style?: { [string]: string | number },
  x?: number,
  y?: number,
  rest?: any,
}) {
  return (
    <path
      d={d}
      style={{
        transform: `scale(${x}, ${y})`,
        animation: `scale ${duration}s ease-out forwards ${delay}s`,
        ...style,
      }}
      {...rest}
    />
  );
}

function DrawnPath({
  d,
  pathLength,
  duration,
  delay = 0,
  style = {},
}: {
  d: string,
  pathLength: number,
  duration: number,
  delay?: number,
  style?: { [string]: string | number },
}) {
  return (
    <path
      d={d}
      style={{
        strokeDashoffset: pathLength,
        strokeDasharray: pathLength,
        animation: `draw ${duration}s ease-out forwards ${delay}s`,
        ...style,
      }}
    />
  );
}

class TimelineRestart extends React.Component<
  {
    children: ({
      onClick: () => void,
      style: { [string]: string | number },
    }) => React.Node,
    transitionDuration: number,
  },
  {
    isRestartingTimeline: boolean,
    isDisappearing: boolean,
  }
> {
  state = { isRestartingTimeline: false, isDisappearing: false };

  disappearingTimeout: TimeoutID;
  restartingTimeout: TimeoutID;

  componentWillUnmount() {
    clearTimeout(this.disappearingTimeout);
    clearTimeout(this.restartingTimeout);
  }

  render() {
    const { isRestartingTimeline, isDisappearing } = this.state;
    const { children, transitionDuration } = this.props;
    if (isRestartingTimeline && !isDisappearing) {
      return null;
    }

    return children({
      onClick: () => {
        if (!isRestartingTimeline) {
          this.setState(
            () => ({ isRestartingTimeline: true, isDisappearing: true }),
            () => {
              this.disappearingTimeout = setTimeout(() => {
                this.setState(() => ({ isDisappearing: false }));
              }, transitionDuration * 1000);

              this.restartingTimeout = setTimeout(() => {
                this.setState(() => ({ isRestartingTimeline: false }));
              }, transitionDuration * 1.3 * 1000);
            }
          );
        }
      },
      style: {
        transition: `opacity ${transitionDuration}s ease-in`,
        opacity: isDisappearing ? 0 : 1,
      },
    });
  }
}

class ClickablePath extends React.Component<
  {
    children: React.Node,
    onClick: () => void,
  },
  {
    isClicked: boolean,
  }
> {
  state = {
    isClicked: false,
  };

  render() {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        ...this.props,
        style: {
          ...child.props.style,
          cursor: `url(static/cursor-pointer${
            this.state.isClicked ? '-clicked' : ''
          }.png), pointer`,
        },
        onMouseDown: () => this.setState(() => ({ isClicked: true })),
        onMouseUp: () => this.setState(() => ({ isClicked: false })),
      });
    });
  }
}

const Svg: React.ComponentType<{}> = styled.svg`
  fill: none;
  stroke: #fff;
  stroke-width: 5;
`;

const Positioner: React.ComponentType<{}> = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
