import { Button, TextInput } from "@mantine/core";

const Subscribe = () => {
  return <div className="mt-20 md:flex hidden items-center bg-blue-500 mx-20 py-3 rounded-xl justify-around">
    <div className="text-4xl w-2/5 text-center font-semibold text-mine-shaft-100">Never Wants
      Miss Any <span className="text-bright-sun-400">Job News?</span></div>
    <div className="flex gap-4 rounded-xl bg-mine-shaft-700 px-3 py-2 items-center">
      <TextInput
        className="[&_input]:text-mine-shaft-100 font-semibold bg-blue-100 rounded-lg"
        variant="unstyled"
        placeholder="Your@email.com"
        size="xl"
      />
      <Button className="!rounded-lg" size="lg" color="dark" variant="filled" >Subscribe</Button>
    </div>
  </div>;
};

export default Subscribe;