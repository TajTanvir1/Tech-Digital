import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Opinions = () => {
    const axiosSecure = useAxiosSecure();

    const { data: opinions = [] } = useQuery({
        queryKey: ['opinions'],
        queryFn: async () => {
            const res = await axiosSecure(`/opinions`);
            return res.data;
        }
    })

   //  console.log(opinions)

    return (
        <div>
            <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-900 underline mt-6 lg:mt-10 mb-4 lg:mb-8  dark-color animate__animated animate__heartBeat animate__slow animate__delay-2s animate__repeat-2">
                Opinions
            </h2>
            <div data-aos="zoom-in-up" data-aos-duration="2000" className="grid lg:grid-cols-3 md:grid-cols-2 justify-around">
            {opinions?.map((opinion , i) =>(
                <div key={i} className="w-[320px] border-l-4 my-4 p-2 rounded-lg border-purple-600 shadow-md shadow-indigo-100 justify-center flex mx-auto">
                <div className="relative">
                    <h1 className="my-1 underline font-semibold w-[280px]">Name: {opinion.name}</h1>
                    <h1 className="my-1 w-[280px]"><span className="font-semibold">Email:</span> {opinion.email}</h1>
                    <h1 className="my-1 w-[280px]"><span className="font-semibold">Opinion:</span> {opinion.opinion}</h1>
                </div>
            </div>
            ))}
            </div>
        </div>
    );
};

export default Opinions;