import React from 'react';
import Chart from 'react-google-charts';
import { Link } from 'react-router-dom';

class Graph extends React.Component {
    constructor(props) {
        super(props);

        this.fetchVideos = this.fetchVideos.bind(this);

        this.state = {
            time: new Date(Date.now()).toString()
        }
    }

    componentDidMount() {
        this.props.clientLoad();
        this.props.fetchVideos();
    }

    componentDidUpdate(prevProps) {
        const { token } = this.props;

        if (prevProps.token !== this.props.token) {
            return this.props.fetchVideos(token);
        }

    }

    fetchVideos() {
        this.setState({
            time: new Date(Date.now()).toString()
        })
        return this.props.fetchVideos();
    }

    render() {
        const { videos } = this.props;

        const now = Date.now();
        const weekMs = 604800000;

        let week = [];

        for (let i = 0; i <= 78; i++) {
            week[i] = 0;
        }

        let totalUploads = 0;

        videos.forEach(video => {
            const dateMs = Date.parse(video.snippet.publishedAt);
            for (let i = 78; i >= 1; i--) {
                const numWeeks = (79 - i);
                const runTime = now - (numWeeks * weekMs);
                
                if (dateMs >= runTime) {
                    week[i] += 1;
                    totalUploads += 1;
                    break;
                } 
            }
        })

        let data = [['x', 'Uploads']];

        for (let i = 0; i < week.length; i++) {
            let set = [ i, week[i] ];
            data.push(set);
        }

        return (
            <div className="index">
                <div className="header2">
                    <h1 onClick={this.fetchVideos} title="Click to Refresh">
                        Videos Uploaded
                    </h1>
                </div>
                        <div className="graphTitle2">
                            (Last 78 weeks / 18 months)
                        </div>
                            <p>
                                Last Refresh: {this.state.time}
                            </p>
                            <p>
                                Total: {totalUploads}
                            </p>
                <div className="vidLink">
                    <Link to="/">Back to Video List</Link>
                </div>
                <div className="chartContainer">
                    <Chart
                        width={'800px'}
                        height={'400px'}
                        chartType="LineChart"
                        loader={<div>Loading Chart</div>}
                        data={data}
                        options={{
                            hAxis: {
                                title: 'Week Number',
                            },
                            vAxis: {
                                title: 'Count',
                            },
                            series: {
                                1: { curveType: 'function' },
                            },
                        }}
                        rootProps={{ 'data-testid': '1' }}
                    />
                </div>
            </div>
        );
    }
}

export default Graph;
