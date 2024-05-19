import Tags from "../Tag/Tag"

const TagList = ({ contents }: { contents: any }) => {

    return (
        <div className="flex gap-3 flex-wrap">
            {contents?.map((tag: any) => (
                <Tags name={tag.name} href={tag.id} key={tag.id}/>
            ))}
        </div>
    )
}

export default TagList