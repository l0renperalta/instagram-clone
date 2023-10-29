import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useFormik } from 'formik';
import { axiosGetUsers, axiosUpdateUser, axiosDeleteUser, axiosPostUser } from '../api/users';
import { useState } from 'react';

const Home = () => {
  const query = useQuery({ queryKey: ['users'], queryFn: axiosGetUsers });

  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: axiosPostUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: axiosUpdateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: axiosDeleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const formik = useFormik({
    initialValues: {
      id: 8,
      name: '',
      lastName: '',
      address: '',
      age: 0,
    },
    onSubmit: (values) => {
      createMutation.mutate(values);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="flex flex-col w-1/5 m-10 ">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" onChange={formik.handleChange} value={formik.values.name} />
        <label htmlFor="name">LastName</label>
        <input id="lastName" name="lastName" type="text" onChange={formik.handleChange} value={formik.values.lastName} />
        <label htmlFor="name">Address</label>
        <input id="address" name="address" type="text" onChange={formik.handleChange} value={formik.values.address} />
        <label htmlFor="name">Age</label>
        <input id="age" name="age" type="number" onChange={formik.handleChange} value={formik.values.age} />
        <button type="submit">Submit</button>
      </form>

      <div className="ml-10">
        {query.data?.map((user) => (
          <User user={user} deleteMutation={deleteMutation} updateMutation={updateMutation} />
        ))}
      </div>
    </div>
  );
};

const User = ({ user, deleteMutation, updateMutation }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [userName, setUserName] = useState('');

  return (
    <>
      {isEditable ? (
        <div key={user.id} className="p-1 flex">
          <input type="text" defaultValue={user.name} onChange={(e) => setUserName(e.target.value)} />
          <button
            className="ml-2 p-1 bg-red-400 hover:bg-red-500 rounded-lg"
            onClick={() => {
              updateMutation.mutate({ ...user, name: userName });
              setIsEditable(false);
            }}
          >
            update
          </button>
        </div>
      ) : (
        <div key={user.id} className="p-1 flex">
          <p onClick={() => setIsEditable(true)}>
            {user.id}.- {user.name}
          </p>
          <button className="ml-2 p-1 bg-red-400 hover:bg-red-500 rounded-lg" onClick={() => deleteMutation.mutate(user.id)}>
            delete
          </button>
        </div>
      )}
    </>
  );
};

export default Home;
