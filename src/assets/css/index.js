import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  @import url('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');

  body {
  background-color: #ffffff;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important; }

.overflow-hidden {
  overflow: hidden !important;
  padding-right: 15px; }

table {
  background-color: #ffffff !important; }

textarea {
  height: 150px !important; }

input.input-file {
  color: transparent; }
  input.input-file::-webkit-file-upload-button {
    visibility: hidden; }
  input.input-file::before {
    content: 'Selecione Arquivos';
    color: black;
    display: inline-block;
    background: -webkit-linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt; }
  input.input-file:hover::before {
    border-color: black; }
  input.input-file:active {
    outline: 0; }
  input.input-file:active::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9); }

.book-single {
  width: 240px;
  height: 400px;
  background-color: #bebebe;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 50px;
  cursor: pointer;
  border-radius: 5px;
  -moz-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear; }
  .book-single:hover .name {
    opacity: 1; }
  .book-single .name {
    -moz-transition: all 0.4s linear;
    -o-transition: all 0.4s linear;
    -webkit-transition: all 0.4s linear;
    transition: all 0.4s linear;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 20px;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.6);
    text-align: center;
    opacity: 0;
    width: 100%;
    height: 100%;
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important;
    -webkit-box-pack: center !important;
    -ms-flex-pack: center !important;
    justify-content: center !important;
    -webkit-box-align: center !important;
    -ms-flex-align: center !important;
    align-items: center !important; }

.modal-book {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  -moz-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear; }
  .modal-book .modal-b-body {
    top: 50%;
    left: 50%;
    -webkit-box-transform: translateY(-50%) translateX(-50%);
    -moz-box-transform: translateY(-50%) translateX(-50%);
    -webkit-transform: translateY(-50%) translateX(-50%);
    -ms-transform: translateY(-50%) translateX(-50%);
    transform: translateY(-50%) translateX(-50%);
    position: absolute;
    background-color: #151515;
    width: 900px;
    height: 500px;
    border-radius: 5px;
    border: 2px solid #ffffff; }
    .modal-book .modal-b-body .image-book {
      width: 30%;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat; }
    .modal-book .modal-b-body .infos {
      width: 70%;
      padding: 30px;
      color: #ffffff;
      display: -webkit-box !important;
      display: -ms-flexbox !important;
      display: flex !important;
      -webkit-box-pack: justify !important;
      -ms-flex-pack: justify !important;
      justify-content: space-between !important;
      -webkit-box-orient: vertical !important;
      -webkit-box-direction: normal !important;
      -ms-flex-direction: column !important;
      flex-direction: column !important; }
      .modal-book .modal-b-body .infos h2 {
        margin-bottom: 30px; }
      .modal-book .modal-b-body .infos .top .middle {
        max-height: 280px;
        overflow: scroll; }
        .modal-book .modal-b-body .infos .top .middle::-webkit-scrollbar {
          display: none !important; }
    .modal-book .modal-b-body span {
      position: absolute;
      top: 15px;
      right: 15px;
      width: 15px;
      height: 15px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      cursor: pointer; }

`;
