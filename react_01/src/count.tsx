import React from 'react';

interface Props {
    count: number;
}

//* Setting default props
//* NOte: defaultProps is a keyword/property of react
class Count extends React.Component<Props>{

    static defaultProps: Props = {
        count: 10
    }

    render() {
        return <h1>{this.props.count}</h1>
    }
}

export default Count;