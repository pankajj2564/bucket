const Errors = ({data}: any) => {
    if (!Array.isArray(data)) return null
    return (
        <ul className={'errors'}>{data?.map((item: any, index: number) => (
            <li key={`error-${index}`}>{item?.message}</li>
        ))}</ul>
    )
}

export default Errors