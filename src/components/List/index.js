import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { MdSearch, MdClose } from 'react-icons/md';
import { Container, Columns, Cell, Filter, Modal } from './styles';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../redux/actions/posts/actions';

export default function List({ posts }) {
  const [searching, setSearching] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredPosts, setFilteredPosts] = useState();
  const [modalDelete, setModalDelete] = useState(false);
  const [post, setPost] = useState();

  const dispatch = useDispatch();

  const handleSearch = () => {
    if (searchText.length) {
      setSearching(!searching);
      setFilteredPosts(handleSearchByName(posts, searchText.toLowerCase()));
    }
  };

  const handleSearchByName = (arr, value) => {
    let buffer;
    let result = [];

    //Compare the names of the post that contains the input which the user types
    for (let i = 0, iLen = arr.length; i < iLen; i++) {
      buffer = arr[i];
      /* eslint-disable-next-line */
      for (let p in buffer) {
        let temp = buffer['name'];
        /* eslint-disable-next-line */
        for (let x in temp) {
          let value2 = Object.values(temp);

          /* eslint-disable-next-line */
          value2.map((valor) => {
            if (valor !== null) {
              if (
                temp.toString().toLowerCase().includes(value) &&
                value !== ' '
              ) {
                if (valor && !result.includes(temp)) {
                  result.push(temp);
                }
              }
            }
          });
        }
      }
    }

    //Produce the array whit theproper objects that matches the names stored in result array
    var filtered = [];
    for (var i = 0; i < result.length; i++) {
      for (var r = 0; r < arr.length; r++) {
        if (arr[r].name === result[i]) {
          filtered.push(arr[r]);
        }
      }
    }

    return filtered;
  };

  const handleResetSearch = () => {
    setSearching(!searching);
    setSearchText('');
    setFilteredPosts(null);
  };

  const handleSearchText = (text) => {
    setSearchText(text);
  };

  const handleDeletePost = (post) => {
    setPost(post);
    setModalDelete(true);
  };

  const handleSendPostDelete = () => {
    dispatch(deletePost(post.id));
    setModalDelete(false);
  };

  return (
    <>
      <Filter>
        <div>
          <input
            type="text"
            placeholder="Buscar post"
            value={searchText}
            onChange={(e) => handleSearchText(e.target.value)}
          />
          {searching === false ? (
            <MdSearch size={15} color="#cfe0ed" />
          ) : (
            <MdClose size={15} color="#ff6434" onClick={handleResetSearch} />
          )}
        </div>
        <button type="button" onClick={handleSearch}>
          Buscar
        </button>
      </Filter>
      <Container>
        <Columns>
          <h4>Nombre</h4>
          <h4>Descripción</h4>
          <h4>Acción</h4>
        </Columns>
        {filteredPosts
          ? filteredPosts.map((post) => (
              <Columns key={post.id}>
                <Cell>
                  <p>{post.name}</p>
                </Cell>
                <Cell>
                  <p>{post.description}</p>
                </Cell>
                <Cell>
                  <p>
                    <MdDelete
                      size={18}
                      color="#cfe0ed"
                      onClick={() => handleDeletePost(post)}
                    />
                  </p>
                </Cell>
              </Columns>
            ))
          : posts.map((post) => (
              <Columns key={post.id}>
                <Cell>
                  <p>{post.name}</p>
                </Cell>
                <Cell>
                  <p>{post.description}</p>
                </Cell>
                <Cell>
                  <p>
                    <MdDelete
                      size={18}
                      color="#cfe0ed"
                      onClick={() => handleDeletePost(post)}
                    />
                  </p>
                </Cell>
              </Columns>
            ))}
      </Container>
      {modalDelete && (
        <Modal>
          <h4>¿Seguro que quieres eliminar este post "{post.name}"?</h4>
          <button
            id="secondary"
            type="button"
            onClick={() => setModalDelete(false)}
          >
            Cancelar
          </button>
          <button type="button" onClick={() => handleSendPostDelete()}>
            Si
          </button>
        </Modal>
      )}
    </>
  );
}
