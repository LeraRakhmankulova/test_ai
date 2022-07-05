import { useTrail, a } from 'react-spring'
import { FC } from 'react';
import React from 'react';

const Trail = ({ children, ...props }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        config: { mass: 8, tension: 500, friction: 300 },
        opacity: 1,
        x: 20,
        from: { opacity: 0, x: -5 },
    })
    return (
        <div className="trails-main">
            <div>
                {trail.map(({ x, ...rest }) => (
                    <a.div
                        style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) }}>
                        <a.div>
                            {children}
                        </a.div>
                    </a.div>
                ))}
            </div>
        </div>
    )
}
export default Trail;