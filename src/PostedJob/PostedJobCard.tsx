const PostedJobcard = (props:any) => {
    return (
        <div className="bg-white rounded-xl p-2 border-1 border-blue-900 border-l-blue-800">
            <div className="text-sm font-semibold">{props.jobTitle}</div>
            <div className="text-xs text-blue-900 font-medium">{props.location}</div>
            <div className="text-xs text-blue-800">{props.posted}</div>
        </div>
    )
}

export default PostedJobcard;