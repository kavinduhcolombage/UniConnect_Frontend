import Footer from "../Footer/Footer";
import Header from "../layouts/Header";
import PostedJob from "../PostedJob/PostedJob";
import PostedJobDesc from "../PostedJob/PostedJobDesc";

const PostedJobPage = () => {
    return (
        <div>
            <Header />
            <div className="bg-gray-100 min-h-[100vh] font-['poppins']">
                <div className="flex gap-5 ml-5">
                    <PostedJob />
                    <PostedJobDesc />
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default PostedJobPage;