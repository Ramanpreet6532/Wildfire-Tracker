import LoaderC from 'react-loader-spinner';

const Loader = () => {
    return (
        <LoaderC
            type="BallTriangle"
            color="firebrick"
            height={80}
            width={100}
            className="loader"
        />
    )
}

export default Loader
