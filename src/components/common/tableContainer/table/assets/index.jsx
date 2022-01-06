export const TableRowOptionIcon = () => {
  return (
    <svg
      width='17'
      height='5'
      className='cp mr-15 ml-15'
      viewBox='0 0 17 5'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g opacity='0.502'>
        <path
          opacity='0.502'
          d='M2.36805 4.03199C3.40082 4.03199 4.23805 3.19476 4.23805 2.16199C4.23805 1.12922 3.40082 0.291992 2.36805 0.291992C1.33527 0.291992 0.498047 1.12922 0.498047 2.16199C0.498047 3.19476 1.33527 4.03199 2.36805 4.03199Z'
          fill='#02013D'
        />
        <path
          opacity='0.502'
          d='M8.49793 4.03199C9.5307 4.03199 10.3679 3.19476 10.3679 2.16199C10.3679 1.12922 9.5307 0.291992 8.49793 0.291992C7.46516 0.291992 6.62793 1.12922 6.62793 2.16199C6.62793 3.19476 7.46516 4.03199 8.49793 4.03199Z'
          fill='#02013D'
        />
        <path
          opacity='0.502'
          d='M14.6278 4.03199C15.6606 4.03199 16.4978 3.19476 16.4978 2.16199C16.4978 1.12922 15.6606 0.291992 14.6278 0.291992C13.595 0.291992 12.7578 1.12922 12.7578 2.16199C12.7578 3.19476 13.595 4.03199 14.6278 4.03199Z'
          fill='#02013D'
        />
      </g>
    </svg>
  );
};

export const TableHeaderSortDownArrow = ({ up }) => {
  return (
    <svg
      width='10'
      height='7'
      viewBox='0 0 10 7'
      fill='none'
      className='ml-10'
      transform={up ? "rotate(180)" : "rotate(0)"}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9.39049 1.06621C9.22936 0.906037 9.01139 0.816132 8.78419 0.816132C8.55699 0.816132 8.33902 0.906037 8.17789 1.06621L5.09049 4.11061L2.04609 1.06621C1.88496 0.906037 1.66699 0.816132 1.43979 0.816132C1.21259 0.816132 0.99462 0.906037 0.833488 1.06621C0.752882 1.14616 0.688902 1.24128 0.645241 1.34608C0.60158 1.45088 0.579102 1.56328 0.579102 1.67681C0.579102 1.79034 0.60158 1.90275 0.645241 2.00755C0.688902 2.11235 0.752882 2.20746 0.833488 2.28741L4.47989 5.93381C4.55984 6.01442 4.65495 6.0784 4.75975 6.12206C4.86455 6.16572 4.97696 6.1882 5.09049 6.1882C5.20402 6.1882 5.31642 6.16572 5.42122 6.12206C5.52602 6.0784 5.62114 6.01442 5.70109 5.93381L9.39049 2.28741C9.47109 2.20746 9.53507 2.11235 9.57873 2.00755C9.62239 1.90275 9.64487 1.79034 9.64487 1.67681C9.64487 1.56328 9.62239 1.45088 9.57873 1.34608C9.53507 1.24128 9.47109 1.14616 9.39049 1.06621Z'
        fill='#ffffff'
      />
    </svg>
  );
};

export const TrashIcon = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 50 50'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8.33333 14.5833V39.5833C8.33333 41.2409 8.99181 42.8306 10.1639 44.0027C11.336 45.1748 12.9257 45.8333 14.5833 45.8333H35.4167C37.0743 45.8333 38.664 45.1748 39.8361 44.0027C41.0082 42.8306 41.6667 41.2409 41.6667 39.5833V14.5833C42.2192 14.5833 42.7491 14.3638 43.1398 13.9731C43.5305 13.5824 43.75 13.0525 43.75 12.4999C43.75 11.9474 43.5305 11.4175 43.1398 11.0268C42.7491 10.6361 42.2192 10.4166 41.6667 10.4166H33.3333V8.33325C33.3333 6.67565 32.6749 5.08594 31.5028 3.91383C30.3306 2.74173 28.7409 2.08325 27.0833 2.08325H22.9167C21.2591 2.08325 19.6694 2.74173 18.4972 3.91383C17.3251 5.08594 16.6667 6.67565 16.6667 8.33325V10.4166H8.33333C7.7808 10.4166 7.25089 10.6361 6.86019 11.0268C6.46949 11.4175 6.25 11.9474 6.25 12.4999C6.25 13.0525 6.46949 13.5824 6.86019 13.9731C7.25089 14.3638 7.7808 14.5833 8.33333 14.5833ZM20.8333 8.33325C20.8333 7.78072 21.0528 7.25081 21.4435 6.86011C21.8342 6.46941 22.3641 6.24992 22.9167 6.24992H27.0833C27.6359 6.24992 28.1658 6.46941 28.5565 6.86011C28.9472 7.25081 29.1667 7.78072 29.1667 8.33325V10.4166H20.8333V8.33325ZM12.5 14.5833H37.5V39.5833C37.5 40.1358 37.2805 40.6657 36.8898 41.0564C36.4991 41.4471 35.9692 41.6666 35.4167 41.6666H14.5833C14.0308 41.6666 13.5009 41.4471 13.1102 41.0564C12.7195 40.6657 12.5 40.1358 12.5 39.5833V14.5833Z'
        fill='#464255'
      />
      <path
        d='M18.75 37.5C19.3025 37.5 19.8324 37.2805 20.2231 36.8898C20.6138 36.4991 20.8333 35.9692 20.8333 35.4167V20.8333C20.8333 20.2808 20.6138 19.7509 20.2231 19.3602C19.8324 18.9695 19.3025 18.75 18.75 18.75C18.1974 18.75 17.6675 18.9695 17.2768 19.3602C16.8861 19.7509 16.6666 20.2808 16.6666 20.8333V35.4167C16.6666 35.9692 16.8861 36.4991 17.2768 36.8898C17.6675 37.2805 18.1974 37.5 18.75 37.5Z'
        fill='#464255'
      />
      <path
        d='M31.25 37.5C31.8025 37.5 32.3324 37.2805 32.7231 36.8898C33.1138 36.4991 33.3333 35.9692 33.3333 35.4167V20.8333C33.3333 20.2808 33.1138 19.7509 32.7231 19.3602C32.3324 18.9695 31.8025 18.75 31.25 18.75C30.6974 18.75 30.1675 18.9695 29.7768 19.3602C29.3861 19.7509 29.1666 20.2808 29.1666 20.8333V35.4167C29.1666 35.9692 29.3861 36.4991 29.7768 36.8898C30.1675 37.2805 30.6974 37.5 31.25 37.5Z'
        fill='#464255'
      />
    </svg>
  );
};

export const PencilIcon = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 50 50'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6.24987 45.8336H14.5832C14.8574 45.8352 15.1292 45.7827 15.383 45.679C15.6368 45.5753 15.8677 45.4225 16.0624 45.2295L41.0624 20.2294C41.2576 20.0358 41.4126 19.8054 41.5184 19.5515C41.6242 19.2976 41.6786 19.0253 41.6786 18.7503C41.6786 18.4753 41.6242 18.203 41.5184 17.9491C41.4126 17.6952 41.2576 17.4648 41.0624 17.2711L32.729 8.93778C32.5354 8.74251 32.3049 8.58752 32.0511 8.48176C31.7972 8.37599 31.5249 8.32153 31.2499 8.32153C30.9748 8.32153 30.7025 8.37599 30.4487 8.48176C30.1948 8.58752 29.9644 8.74251 29.7707 8.93778L4.77071 33.9378C4.57762 34.1325 4.42486 34.3633 4.32118 34.6171C4.21751 34.871 4.16495 35.1428 4.16654 35.417V43.7503C4.16654 44.3028 4.38603 44.8327 4.77673 45.2234C5.16743 45.6141 5.69734 45.8336 6.24987 45.8336ZM8.33321 36.2711L31.2499 13.3544L36.6457 18.7503L13.729 41.667H8.33321V36.2711Z'
        fill='#464255'
      />
      <path
        d='M36.8961 4.77089C36.7018 4.57665 36.4712 4.42256 36.2174 4.31744C35.9637 4.21231 35.6916 4.1582 35.4169 4.1582C34.8621 4.1582 34.3301 4.37859 33.9378 4.77089C33.5455 5.16319 33.3251 5.69527 33.3251 6.25006C33.3251 6.80486 33.5455 7.33693 33.9378 7.72923L42.2711 16.0626C42.4648 16.2578 42.6952 16.4128 42.9491 16.5186C43.2029 16.6244 43.4752 16.6788 43.7503 16.6788C44.0253 16.6788 44.2976 16.6244 44.5515 16.5186C44.8053 16.4128 45.0358 16.2578 45.2294 16.0626C45.4247 15.8689 45.5797 15.6385 45.6855 15.3846C45.7912 15.1307 45.8457 14.8584 45.8457 14.5834C45.8457 14.3084 45.7912 14.0361 45.6855 13.7822C45.5797 13.5283 45.4247 13.2979 45.2294 13.1042L36.8961 4.77089Z'
        fill='#464255'
      />
    </svg>
  );
};
