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
      width='14'
      height='13'
      viewBox='0 0 14 13'
      className='l-0'
      fill='none'
      transform={up ? "rotate(180)" : "rotate(0)"}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0.988281 6.5L7 0.488281L13.0117 6.5L11.9219 7.55469L7.73828 3.37109V12.5117H6.26172V3.37109L2.04297 7.55469L0.988281 6.5Z'
        fill='#757575'
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

export const AddNewIcon = () => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C18 12.1217 17.1572 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18ZM14 9H11V6C11 5.73478 10.8946 5.48043 10.7071 5.29289C10.5196 5.10536 10.2652 5 10 5C9.73479 5 9.48043 5.10536 9.2929 5.29289C9.10536 5.48043 9 5.73478 9 6V9H6C5.73479 9 5.48043 9.10536 5.2929 9.29289C5.10536 9.48043 5 9.73478 5 10C5 10.2652 5.10536 10.5196 5.2929 10.7071C5.48043 10.8946 5.73479 11 6 11H9V14C9 14.2652 9.10536 14.5196 9.2929 14.7071C9.48043 14.8946 9.73479 15 10 15C10.2652 15 10.5196 14.8946 10.7071 14.7071C10.8946 14.5196 11 14.2652 11 14V11H14C14.2652 11 14.5196 10.8946 14.7071 10.7071C14.8946 10.5196 15 10.2652 15 10C15 9.73478 14.8946 9.48043 14.7071 9.29289C14.5196 9.10536 14.2652 9 14 9Z'
        fill='white'
      />
    </svg>
  );
};

export const RowRightArrow = () => {
  return (
    <svg
      width='8'
      height='12'
      viewBox='0 0 8 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6.83037 5.29019L2.59037 1.05019C2.49741 0.956464 2.38681 0.88207 2.26495 0.831301C2.14309 0.780533 2.01238 0.754395 1.88037 0.754395C1.74836 0.754395 1.61765 0.780533 1.49579 0.831301C1.37393 0.88207 1.26333 0.956464 1.17037 1.05019C0.984119 1.23756 0.879578 1.49101 0.879578 1.75519C0.879578 2.01938 0.984119 2.27283 1.17037 2.46019L4.71037 6.00019L1.17037 9.54019C0.984119 9.72755 0.879578 9.98101 0.879578 10.2452C0.879578 10.5094 0.984119 10.7628 1.17037 10.9502C1.26381 11.0429 1.37463 11.1162 1.49646 11.166C1.6183 11.2157 1.74876 11.241 1.88037 11.2402C2.01198 11.241 2.14244 11.2157 2.26428 11.166C2.38611 11.1162 2.49693 11.0429 2.59037 10.9502L6.83037 6.71019C6.9241 6.61723 6.99849 6.50663 7.04926 6.38477C7.10003 6.26291 7.12617 6.1322 7.12617 6.00019C7.12617 5.86818 7.10003 5.73747 7.04926 5.61562C6.99849 5.49376 6.9241 5.38315 6.83037 5.29019Z'
        fill='black'
      />
    </svg>
  );
};

export const BlueDropdownArrow = () => {
  return (
    <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.53991 0.463865L5.54022 0.464171C5.55224 0.476094 5.56178 0.490281 5.56829 0.505912C5.57481 0.521547 5.57816 0.538313 5.57816 0.555244C5.57816 0.572174 5.57481 0.588941 5.5683 0.604573C5.56181 0.620149 5.55231 0.634289 5.54035 0.646184C5.54031 0.646228 5.54026 0.646272 5.54022 0.646316L3.33955 2.82134L3.33953 2.82132L3.33683 2.82405C3.32491 2.83607 3.31072 2.84561 3.29509 2.85212L3.44308 3.20735L3.29509 2.85212C3.27946 2.85864 3.26269 2.86199 3.24576 2.86199C3.22883 2.86199 3.21206 2.85864 3.19643 2.85212C3.1808 2.84561 3.16661 2.83607 3.15469 2.82405L3.15469 2.82404L3.15357 2.82293L0.978077 0.647431L0.978079 0.647428L0.976959 0.646317C0.964936 0.634392 0.955393 0.620205 0.948881 0.604575C0.942369 0.588944 0.939016 0.572178 0.939016 0.555244C0.939016 0.53831 0.942369 0.521544 0.948881 0.505913C0.955393 0.490282 0.964936 0.476095 0.976959 0.46417L0.976959 0.464171L0.977266 0.463865C1.0013 0.439975 1.03381 0.426565 1.0677 0.426565C1.10146 0.426565 1.13385 0.439874 1.15786 0.463596C1.15795 0.463686 1.15804 0.463775 1.15813 0.463865L2.97365 2.27939L3.24386 2.5496L3.51595 2.28129L5.35794 0.464961L5.35905 0.463865C5.38308 0.439975 5.41559 0.426565 5.44948 0.426565C5.48337 0.426565 5.51588 0.439975 5.53991 0.463865Z" fill="black" stroke="#003ECB" stroke-width="0.769634"/>
    </svg>
  );
};

export const SeverityIcon = (level) => {
  return level.level == 3 ? (
    <svg
      width='28'
      height='28'
      viewBox='0 0 28 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='14' cy='14' r='14' fill='#EA0000' />
      <rect
        width='16.8'
        height='16.8'
        transform='translate(7 7)'
        fill='#EA0000'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M9.79999 21.7001H11.2V14.7001H15.4V16.1001H21V10.5001H16.1V9.1001H9.79999V21.7001ZM15.4 10.5001H11.2V13.3001H16.1V14.7001H19.6V11.9001H15.4V10.5001Z'
        fill='white'
      />
    </svg>
  ) : level.level == 2 ? (
    <svg
      width='28'
      height='28'
      viewBox='0 0 28 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='14' cy='14' r='14' fill='#FBBC05' />
      <path
        d='M14.644 16.8C14.63 16.757 14.6087 16.7168 14.581 16.681L14.497 16.576C14.4319 16.5104 14.3545 16.4583 14.2692 16.4228C14.1839 16.3873 14.0924 16.369 14 16.369C13.9076 16.369 13.8161 16.3873 13.7308 16.4228C13.6455 16.4583 13.568 16.5104 13.503 16.576C13.4696 16.6064 13.4412 16.6418 13.419 16.681C13.3913 16.7168 13.3699 16.757 13.356 16.8C13.3357 16.8421 13.3216 16.8869 13.314 16.933C13.3105 16.9773 13.3105 17.0218 13.314 17.066C13.3115 17.1601 13.3307 17.2535 13.37 17.339C13.4412 17.5093 13.5768 17.6445 13.7472 17.7153C13.9176 17.7861 14.1091 17.7867 14.28 17.717C14.365 17.679 14.4431 17.6269 14.511 17.563C14.5739 17.4985 14.6238 17.4225 14.658 17.339C14.6947 17.2527 14.7138 17.1599 14.714 17.066C14.7174 17.0218 14.7174 16.9773 14.714 16.933C14.6976 16.8854 14.674 16.8405 14.644 16.8ZM14 11.452C13.8143 11.452 13.6363 11.5258 13.505 11.657C13.3737 11.7883 13.3 11.9664 13.3 12.152V14.252C13.3 14.4377 13.3737 14.6157 13.505 14.747C13.6363 14.8783 13.8143 14.952 14 14.952C14.1856 14.952 14.3637 14.8783 14.4949 14.747C14.6262 14.6157 14.7 14.4377 14.7 14.252V12.152C14.7 11.9664 14.6262 11.7883 14.4949 11.657C14.3637 11.5258 14.1856 11.452 14 11.452ZM19.341 8.85502C19.2596 8.78924 19.1646 8.74251 19.0629 8.71828C18.9611 8.69406 18.8552 8.69294 18.753 8.71502C18.005 8.87178 17.2328 8.87378 16.484 8.72089C15.7352 8.568 15.0256 8.26346 14.399 7.82602C14.2818 7.74473 14.1426 7.70117 14 7.70117C13.8574 7.70117 13.7181 7.74473 13.601 7.82602C12.9743 8.26346 12.2647 8.568 11.5159 8.72089C10.7671 8.87378 9.99496 8.87178 9.24697 8.71502C9.14472 8.69294 9.03883 8.69406 8.93708 8.71828C8.83532 8.74251 8.74029 8.78924 8.65897 8.85502C8.57775 8.9209 8.51233 9.00415 8.46751 9.09863C8.42269 9.19312 8.39961 9.29644 8.39997 9.40102V14.616C8.39935 15.6196 8.63851 16.6089 9.09754 17.5014C9.55658 18.3939 10.2222 19.1638 11.039 19.747L13.594 21.567C13.7125 21.6514 13.8544 21.6968 14 21.6968C14.1455 21.6968 14.2874 21.6514 14.406 21.567L16.961 19.747C17.7777 19.1638 18.4434 18.3939 18.9024 17.5014C19.3614 16.6089 19.6006 15.6196 19.6 14.616V9.40102C19.6003 9.29644 19.5772 9.19312 19.5324 9.09863C19.4876 9.00415 19.4222 8.9209 19.341 8.85502ZM18.2 14.616C18.2005 15.3963 18.0147 16.1655 17.6579 16.8595C17.3012 17.5535 16.7838 18.1523 16.149 18.606L14 20.139L11.851 18.606C11.2161 18.1523 10.6988 17.5535 10.342 16.8595C9.98527 16.1655 9.79943 15.3963 9.79997 14.616V10.206C11.2675 10.3316 12.7372 9.99114 14 9.23302C15.2627 9.99114 16.7325 10.3316 18.2 10.206V14.616Z'
        fill='black'
      />
    </svg>
  ) : (
    <svg
      width='28'
      height='28'
      viewBox='0 0 28 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='14' cy='14' r='14' fill='#7A684B' />
      <path
        d='M14 10.5C13.8143 10.5 13.6363 10.5738 13.505 10.705C13.3738 10.8363 13.3 11.0143 13.3 11.2V14C13.3 14.1857 13.3738 14.3637 13.505 14.495C13.6363 14.6263 13.8143 14.7 14 14.7C14.1857 14.7 14.3637 14.6263 14.495 14.495C14.6263 14.3637 14.7 14.1857 14.7 14V11.2C14.7 11.0143 14.6263 10.8363 14.495 10.705C14.3637 10.5738 14.1857 10.5 14 10.5ZM14 16.1C13.8616 16.1 13.7262 16.1411 13.6111 16.218C13.496 16.2949 13.4063 16.4042 13.3533 16.5321C13.3003 16.66 13.2864 16.8008 13.3135 16.9366C13.3405 17.0724 13.4071 17.1971 13.505 17.295C13.6029 17.3929 13.7277 17.4595 13.8634 17.4866C13.9992 17.5136 14.14 17.4997 14.2679 17.4467C14.3958 17.3937 14.5051 17.304 14.582 17.1889C14.6589 17.0738 14.7 16.9384 14.7 16.8C14.7 16.6144 14.6263 16.4363 14.495 16.305C14.3637 16.1738 14.1857 16.1 14 16.1ZM20.797 10.892L17.108 7.203C16.9739 7.07509 16.7963 7.00258 16.611 7H11.389C11.2037 7.00258 11.0261 7.07509 10.892 7.203L7.203 10.892C7.07509 11.0261 7.00258 11.2037 7 11.389V16.611C7.00258 16.7963 7.07509 16.9739 7.203 17.108L10.892 20.797C11.0261 20.9249 11.2037 20.9974 11.389 21H16.611C16.7963 20.9974 16.9739 20.9249 17.108 20.797L20.797 17.108C20.9249 16.9739 20.9974 16.7963 21 16.611V11.389C20.9974 11.2037 20.9249 11.0261 20.797 10.892ZM19.6 16.317L16.317 19.6H11.683L8.4 16.317V11.683L11.683 8.4H16.317L19.6 11.683V16.317Z'
        fill='white'
      />
    </svg>
  );
};

export const DoubleArrow = () => {
  return (
   
<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.13797 0.908372C1.98105 0.747032 1.76647 0.654636 1.54142 0.65151C1.31638 0.648385 1.09931 0.734786 0.93797 0.891705C0.77663 1.04863 0.684234 1.26321 0.681108 1.48825C0.677983 1.7133 0.764384 1.93037 0.921303 2.09171L2.8713 4.00004L0.921303 5.90837C0.843196 5.98584 0.781201 6.07801 0.738894 6.17956C0.696586 6.28111 0.674805 6.39003 0.674805 6.50004C0.674805 6.61005 0.696586 6.71897 0.738894 6.82052C0.781201 6.92207 0.843196 7.01424 0.921303 7.09171C0.998772 7.16981 1.09094 7.23181 1.19249 7.27412C1.29404 7.31642 1.40296 7.3382 1.51297 7.3382C1.62298 7.3382 1.7319 7.31642 1.83345 7.27412C1.935 7.23181 2.02717 7.16981 2.10464 7.09171L4.60464 4.59171C4.68274 4.51424 4.74474 4.42207 4.78705 4.32052C4.82935 4.21897 4.85114 4.11005 4.85114 4.00004C4.85114 3.89003 4.82935 3.78111 4.78705 3.67956C4.74474 3.57801 4.68274 3.48584 4.60464 3.40837L2.13797 0.908372ZM9.2213 3.40837L6.7213 0.908372C6.56438 0.751452 6.35155 0.663295 6.12964 0.663295C5.90772 0.663295 5.69489 0.751452 5.53797 0.908372C5.38105 1.06529 5.29289 1.27812 5.29289 1.50004C5.29289 1.72196 5.38105 1.93479 5.53797 2.09171L7.45464 4.00004L5.53797 5.90837C5.45986 5.98584 5.39787 6.07801 5.35556 6.17956C5.31325 6.28111 5.29147 6.39003 5.29147 6.50004C5.29147 6.61005 5.31325 6.71897 5.35556 6.82052C5.39787 6.92207 5.45986 7.01424 5.53797 7.09171C5.61544 7.16981 5.70761 7.23181 5.80916 7.27412C5.91071 7.31642 6.01963 7.3382 6.12964 7.3382C6.23965 7.3382 6.34857 7.31642 6.45012 7.27412C6.55167 7.23181 6.64383 7.16981 6.7213 7.09171L9.2213 4.59171C9.30163 4.51646 9.36626 4.42605 9.41145 4.32569C9.45664 4.22533 9.48151 4.11701 9.48461 4.00699C9.48771 3.89696 9.46898 3.78742 9.42951 3.68467C9.39004 3.58193 9.3306 3.48802 9.25464 3.40837H9.2213Z" fill="#FFBE55"/>
</svg>
  );
};

export const CtGroupIcon = () => {
  return (
    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.3 8.86282C11.8336 8.40096 12.2616 7.82971 12.5549 7.18785C12.8482 6.54598 13 5.84853 13 5.14282C13 3.81674 12.4732 2.54497 11.5355 1.60729C10.5979 0.669607 9.32608 0.142822 8 0.142822C6.67392 0.142822 5.40215 0.669607 4.46447 1.60729C3.52678 2.54497 3 3.81674 3 5.14282C2.99999 5.84853 3.1518 6.54598 3.44513 7.18785C3.73845 7.82971 4.16642 8.40096 4.7 8.86282C3.30014 9.49671 2.11247 10.5204 1.27898 11.8114C0.445495 13.1024 0.00147185 14.6061 0 16.1428C0 16.408 0.105357 16.6624 0.292893 16.8499C0.48043 17.0375 0.734784 17.1428 1 17.1428C1.26522 17.1428 1.51957 17.0375 1.70711 16.8499C1.89464 16.6624 2 16.408 2 16.1428C2 14.5515 2.63214 13.0254 3.75736 11.9002C4.88258 10.775 6.4087 10.1428 8 10.1428C9.5913 10.1428 11.1174 10.775 12.2426 11.9002C13.3679 13.0254 14 14.5515 14 16.1428C14 16.408 14.1054 16.6624 14.2929 16.8499C14.4804 17.0375 14.7348 17.1428 15 17.1428C15.2652 17.1428 15.5196 17.0375 15.7071 16.8499C15.8946 16.6624 16 16.408 16 16.1428C15.9985 14.6061 15.5545 13.1024 14.721 11.8114C13.8875 10.5204 12.6999 9.49671 11.3 8.86282ZM8 8.14282C7.40666 8.14282 6.82664 7.96688 6.33329 7.63723C5.83994 7.30759 5.45542 6.83905 5.22836 6.29087C5.0013 5.74269 4.94189 5.13949 5.05764 4.55755C5.1734 3.97561 5.45912 3.44106 5.87868 3.0215C6.29824 2.60194 6.83279 2.31622 7.41473 2.20047C7.99667 2.08471 8.59987 2.14412 9.14805 2.37118C9.69623 2.59825 10.1648 2.98276 10.4944 3.47611C10.8241 3.96946 11 4.54948 11 5.14282C11 5.93847 10.6839 6.70153 10.1213 7.26414C9.55871 7.82675 8.79565 8.14282 8 8.14282ZM17.74 8.46282C18.38 7.74215 18.798 6.85188 18.9438 5.89916C19.0896 4.94645 18.9569 3.9719 18.5618 3.09282C18.1666 2.21375 17.5258 1.46762 16.7165 0.944245C15.9071 0.420872 14.9638 0.142565 14 0.142822C13.7348 0.142822 13.4804 0.248179 13.2929 0.435716C13.1054 0.623252 13 0.877606 13 1.14282C13 1.40804 13.1054 1.66239 13.2929 1.84993C13.4804 2.03747 13.7348 2.14282 14 2.14282C14.7956 2.14282 15.5587 2.45889 16.1213 3.0215C16.6839 3.58411 17 4.34717 17 5.14282C16.9986 5.66806 16.8593 6.18373 16.5961 6.63824C16.3328 7.09276 15.9549 7.4702 15.5 7.73282C15.3517 7.81834 15.2279 7.94049 15.1404 8.08756C15.0528 8.23464 15.0045 8.40172 15 8.57282C14.9958 8.74259 15.0349 8.91062 15.1137 9.06108C15.1924 9.21154 15.3081 9.33948 15.45 9.43282L15.84 9.69282L15.97 9.76282C17.1754 10.3345 18.1923 11.2388 18.901 12.3691C19.6096 13.4995 19.9805 14.8088 19.97 16.1428C19.97 16.408 20.0754 16.6624 20.2629 16.8499C20.4504 17.0375 20.7048 17.1428 20.97 17.1428C21.2352 17.1428 21.4896 17.0375 21.6771 16.8499C21.8646 16.6624 21.97 16.408 21.97 16.1428C21.9782 14.6083 21.5938 13.0971 20.8535 11.7529C20.1131 10.4087 19.0413 9.27613 17.74 8.46282Z" fill="black"/>
    </svg>
  );
};

export const CtIcon = () => {
  return (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.8096 11.3527C14.79 10.5814 15.5056 9.52362 15.8568 8.32664C16.2081 7.12967 16.1775 5.85297 15.7694 4.67417C15.3613 3.49537 14.5959 2.4731 13.5797 1.74956C12.5635 1.02602 11.3471 0.637207 10.0996 0.637207C8.85215 0.637207 7.63572 1.02602 6.61954 1.74956C5.60335 2.4731 4.83795 3.49537 4.42982 4.67417C4.02169 5.85297 3.99112 7.12967 4.34237 8.32664C4.69362 9.52362 5.40921 10.5814 6.38961 11.3527C4.70968 12.0257 3.24389 13.1421 2.1485 14.5826C1.0531 16.0232 0.369169 17.734 0.169606 19.5327C0.155161 19.664 0.166723 19.7969 0.203631 19.9238C0.24054 20.0506 0.302073 20.169 0.384718 20.272C0.551625 20.4802 0.79439 20.6135 1.05961 20.6427C1.32482 20.6719 1.59077 20.5945 1.79893 20.4276C2.0071 20.2607 2.14043 20.0179 2.16961 19.7527C2.38919 17.7979 3.32129 15.9925 4.78783 14.6815C6.25436 13.3705 8.15251 12.6457 10.1196 12.6457C12.0867 12.6457 13.9849 13.3705 15.4514 14.6815C16.9179 15.9925 17.85 17.7979 18.0696 19.7527C18.0968 19.9984 18.214 20.2254 18.3987 20.3897C18.5834 20.5541 18.8224 20.6442 19.0696 20.6427H19.1796C19.4417 20.6125 19.6813 20.48 19.8462 20.274C20.011 20.0679 20.0877 19.8051 20.0596 19.5427C19.8591 17.7389 19.1715 16.0237 18.0705 14.5809C16.9694 13.1381 15.4965 12.0222 13.8096 11.3527ZM10.0996 10.6427C9.30848 10.6427 8.53512 10.4081 7.87733 9.96858C7.21953 9.52906 6.70684 8.90434 6.40409 8.17344C6.10134 7.44253 6.02212 6.63827 6.17646 5.86234C6.33081 5.08642 6.71177 4.37369 7.27118 3.81428C7.83059 3.25487 8.54332 2.8739 9.31925 2.71956C10.0952 2.56522 10.8994 2.64443 11.6303 2.94718C12.3612 3.24994 12.986 3.76263 13.4255 4.42042C13.865 5.07822 14.0996 5.85158 14.0996 6.6427C14.0996 7.70357 13.6782 8.72098 12.928 9.47113C12.1779 10.2213 11.1605 10.6427 10.0996 10.6427Z" fill="black"/>
    </svg>
  );
};

export const GlobalRegionIcon = () => {
  return (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.4016 7.2827C19.4016 7.2827 19.4016 7.2827 19.4016 7.2327C18.697 5.30893 17.4186 3.64799 15.7391 2.47457C14.0597 1.30115 12.0604 0.671875 10.0117 0.671875C7.9629 0.671875 5.96358 1.30115 4.28416 2.47457C2.60474 3.64799 1.32625 5.30893 0.621651 7.2327C0.621651 7.2327 0.621651 7.2327 0.621651 7.2827C-0.165225 9.4536 -0.165225 11.8318 0.621651 14.0027C0.621651 14.0027 0.621651 14.0027 0.621651 14.0527C1.32625 15.9765 2.60474 17.6374 4.28416 18.8108C5.96358 19.9843 7.9629 20.6135 10.0117 20.6135C12.0604 20.6135 14.0597 19.9843 15.7391 18.8108C17.4186 17.6374 18.697 15.9765 19.4016 14.0527C19.4016 14.0527 19.4016 14.0527 19.4016 14.0027C20.1885 11.8318 20.1885 9.4536 19.4016 7.2827ZM2.25165 12.6427C1.90488 11.3319 1.90488 9.95349 2.25165 8.6427H4.11165C3.95168 9.97124 3.95168 11.3142 4.11165 12.6427H2.25165ZM3.07165 14.6427H4.47165C4.70637 15.5345 5.04186 16.3968 5.47165 17.2127C4.49095 16.5446 3.67115 15.6668 3.07165 14.6427ZM4.47165 6.6427H3.07165C3.66252 5.62179 4.47184 4.74417 5.44165 4.0727C5.0222 4.88995 4.69679 5.75212 4.47165 6.6427ZM8.99165 18.3427C7.76342 17.4414 6.9008 16.1279 6.56165 14.6427H8.99165V18.3427ZM8.99165 12.6427H6.13165C5.94504 11.3159 5.94504 9.96951 6.13165 8.6427H8.99165V12.6427ZM8.99165 6.6427H6.56165C6.9008 5.15747 7.76342 3.84402 8.99165 2.9427V6.6427ZM16.9116 6.6427H15.5117C15.2769 5.75086 14.9414 4.88864 14.5117 4.0727C15.4924 4.74077 16.3122 5.61864 16.9116 6.6427ZM10.9917 2.9427C12.2199 3.84402 13.0825 5.15747 13.4217 6.6427H10.9917V2.9427ZM10.9917 18.3427V14.6427H13.4217C13.0825 16.1279 12.2199 17.4414 10.9917 18.3427ZM13.8517 12.6427H10.9917V8.6427H13.8517C14.0383 9.96951 14.0383 11.3159 13.8517 12.6427ZM14.5416 17.2127C14.9714 16.3968 15.3069 15.5345 15.5416 14.6427H16.9417C16.3422 15.6668 15.5224 16.5446 14.5416 17.2127ZM17.7316 12.6427H15.8716C15.953 11.9792 15.9931 11.3112 15.9917 10.6427C15.9928 9.97421 15.9527 9.30627 15.8716 8.6427H17.7316C18.0784 9.95349 18.0784 11.3319 17.7316 12.6427Z" fill="black"/>
    </svg>
  );
};

export const RedCloseIcon = () => {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.59981 3.37143L3.3277 3.09933L0.849654 0.621281C0.849631 0.621259 0.849609 0.621236 0.849587 0.621214C0.813508 0.585217 0.764632 0.565005 0.71368 0.565005C0.662688 0.565005 0.613784 0.585247 0.577716 0.621271L0.305774 0.349L0.578055 0.620932C0.542016 0.657018 0.52178 0.705922 0.52178 0.756906C0.52178 0.807872 0.542001 0.856752 0.57799 0.892815C0.578009 0.892833 0.578027 0.892851 0.578045 0.89287L3.0561 3.37093L3.32821 3.64303L3.0561 3.91514L0.583979 6.38726C0.552086 6.42332 0.534846 6.46999 0.535696 6.51813C0.536576 6.56799 0.556774 6.61555 0.591999 6.65078L3.59981 3.37143ZM3.59981 3.37143L3.87191 3.09933M3.59981 3.37143L3.87191 3.09933M0.855558 6.65888L3.3277 4.18674L3.59981 3.91463L3.87191 4.18674L6.35013 6.66496L6.35969 6.67451L6.35951 6.67467C6.37719 6.69363 6.39846 6.70881 6.42207 6.71933C6.44557 6.72981 6.47105 6.73548 6.49704 6.73594C6.5226 6.7364 6.54826 6.73168 6.57248 6.72191C6.59642 6.71224 6.61804 6.69792 6.63616 6.67977L6.63654 6.67939C6.6547 6.66126 6.66902 6.63964 6.67868 6.6157C6.68846 6.59149 6.69317 6.56583 6.69272 6.54027C6.69225 6.51428 6.68658 6.4888 6.67611 6.4653C6.66558 6.44169 6.65041 6.42041 6.63145 6.40274L6.62156 6.39353L6.62173 6.39336L4.14351 3.91514L3.8714 3.64303L4.14351 3.37093L6.62173 0.892705L6.63136 0.883071L6.63153 0.883248C6.65042 0.865652 6.66558 0.844417 6.67611 0.820793C6.68658 0.797303 6.69225 0.771818 6.69272 0.745812L0.855558 6.65888ZM0.855558 6.65888C0.819574 6.69072 0.772878 6.708 0.724623 6.70716C0.674738 6.70621 0.627216 6.68598 0.592009 6.65079L0.855558 6.65888ZM3.87191 3.09933L6.35013 0.621107L6.3503 0.621274M3.87191 3.09933L6.3503 0.621274M6.3503 0.621274L6.35949 0.61141M6.3503 0.621274L6.35949 0.61141M6.35949 0.61141C6.37718 0.592443 6.39845 0.577271 6.42204 0.56676C6.44565 0.55624 6.47113 0.550587 6.49697 0.55013C6.52276 0.549674 6.5484 0.554417 6.57241 0.564112C6.59634 0.573774 6.61806 0.588151 6.63631 0.606414L6.63651 0.606606M6.35949 0.61141L6.63651 0.606606M6.63651 0.606606C6.65465 0.62473 6.669 0.646388 6.67869 0.670373L6.63651 0.606606Z" fill="#24292E" stroke="#C70000" stroke-width="0.769634"/>
    </svg>
  );
};

export const AwsCloudIcon = () => {
  return (
    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.198975 22.6429C0.198975 10.3821 10.1383 0.442871 22.399 0.442871C34.6597 0.442871 44.599 10.3821 44.599 22.6429C44.599 34.9036 34.6597 44.8429 22.399 44.8429C10.1383 44.8429 0.198975 34.9036 0.198975 22.6429Z" fill="#FFF2DF"/>
    <g clip-path="url(#clip0_2144_23688)">
    <path d="M17.817 20.9038C17.8116 21.1137 17.8375 21.3232 17.8939 21.5254C17.9559 21.6984 18.0306 21.8665 18.1174 22.0285C18.1485 22.0764 18.1655 22.132 18.1663 22.1891C18.1663 22.2589 18.1244 22.3289 18.0336 22.3986L17.5936 22.692C17.5405 22.7302 17.4774 22.7521 17.4121 22.7548C17.3325 22.7494 17.2578 22.7145 17.2025 22.6571C17.1084 22.5559 17.0242 22.446 16.951 22.3288C16.8812 22.2101 16.8113 22.0773 16.7345 21.9167C16.1897 22.5592 15.5052 22.8804 14.6811 22.8804C14.0942 22.8804 13.6264 22.7127 13.2842 22.3774C12.942 22.042 12.7673 21.5952 12.7673 21.0365C12.7673 20.4428 12.9769 19.9609 13.4029 19.5977C13.829 19.2345 14.3947 19.0529 15.1141 19.0529C15.3618 19.055 15.6092 19.0736 15.8544 19.1088C16.1128 19.1438 16.3783 19.1996 16.6576 19.2625V18.7526C16.6576 18.2216 16.5458 17.8517 16.3294 17.6351C16.1058 17.4186 15.7287 17.3138 15.1909 17.3138C14.9367 17.3138 14.6835 17.3443 14.4366 17.4046C14.1798 17.4658 13.9277 17.5452 13.6822 17.6421C13.6028 17.6776 13.5211 17.708 13.4378 17.7329C13.4016 17.7448 13.364 17.7519 13.326 17.7538C13.2282 17.7538 13.1793 17.684 13.1793 17.5373V17.1951C13.1793 17.0833 13.1933 16.9995 13.2282 16.9507C13.2809 16.887 13.348 16.8367 13.4238 16.804C13.704 16.6654 13.9993 16.5599 14.3039 16.4897C14.6598 16.3984 15.026 16.3538 15.3935 16.357C16.2248 16.357 16.8322 16.5455 17.2234 16.9227C17.6075 17.2999 17.8031 17.8726 17.8031 18.6409V20.9038H17.817ZM14.9814 21.9654C15.2264 21.9627 15.4694 21.9203 15.7008 21.8397C15.9571 21.751 16.1859 21.5969 16.3643 21.3926C16.4769 21.2638 16.5582 21.1108 16.6018 20.9454C16.6497 20.7465 16.6732 20.5424 16.6716 20.3378V20.0447C16.4598 19.9932 16.2453 19.9535 16.0291 19.926C15.8113 19.8984 15.592 19.8845 15.3725 19.8843C14.9045 19.8843 14.5623 19.9751 14.3318 20.1637C14.1014 20.3524 13.9896 20.6177 13.9896 20.9669C13.9896 21.2952 14.0734 21.5396 14.248 21.7073C14.4157 21.8819 14.6601 21.9657 14.9814 21.9657V21.9654ZM20.5899 22.7197C20.4641 22.7197 20.3803 22.6988 20.3244 22.6499C20.2685 22.608 20.2197 22.5102 20.1778 22.3775L18.5364 16.9786C18.5045 16.8882 18.4834 16.7944 18.4735 16.6991C18.4735 16.5873 18.5294 16.5245 18.6412 16.5245H19.3257C19.4584 16.5245 19.5492 16.5455 19.5981 16.5943C19.654 16.6363 19.6958 16.7341 19.7378 16.8667L20.9112 21.4904L22.0007 16.8669C22.0356 16.7271 22.0775 16.6364 22.1334 16.5944C22.1893 16.5525 22.2871 16.5246 22.4129 16.5246H22.9718C23.1045 16.5246 23.1954 16.5456 23.2513 16.5944C23.3072 16.6364 23.356 16.7342 23.384 16.8669L24.4875 21.5464L25.6954 16.8669C25.7373 16.7271 25.7862 16.6364 25.8352 16.5944C25.891 16.5525 25.9818 16.5246 26.1076 16.5246H26.7571C26.8689 16.5246 26.9317 16.5805 26.9317 16.6993C26.9301 16.7368 26.9254 16.7742 26.9178 16.811C26.9068 16.8706 26.8905 16.9291 26.8689 16.9857L25.1856 22.3846C25.1437 22.5243 25.0948 22.6151 25.0389 22.657C24.96 22.7075 24.8671 22.732 24.7735 22.7268H24.1728C24.0401 22.7268 23.9493 22.7059 23.8934 22.657C23.8375 22.6081 23.7886 22.5173 23.7607 22.3775L22.6782 17.8726L21.6025 22.3705C21.5676 22.5103 21.5257 22.601 21.4698 22.65C21.4139 22.699 21.3162 22.7198 21.1903 22.7198L20.5899 22.7197ZM29.5648 22.9083C29.2026 22.9087 28.8415 22.8665 28.4892 22.7826C28.14 22.6987 27.8676 22.608 27.686 22.5031C27.5742 22.4403 27.4974 22.3704 27.4695 22.3075C27.4423 22.2458 27.428 22.1793 27.4276 22.1119V21.7559C27.4276 21.6092 27.4835 21.5394 27.5882 21.5394C27.631 21.5395 27.6734 21.5466 27.7139 21.5604C27.7559 21.5743 27.8187 21.6023 27.8886 21.6302C28.1353 21.7387 28.3928 21.8206 28.6569 21.8746C28.9304 21.9302 29.2089 21.9583 29.488 21.9585C29.928 21.9585 30.2703 21.8817 30.5077 21.728C30.6215 21.6594 30.7151 21.5618 30.7789 21.4452C30.8427 21.3287 30.8745 21.1973 30.8711 21.0645C30.8735 20.9746 30.8581 20.8851 30.8257 20.8012C30.7934 20.7172 30.7447 20.6406 30.6825 20.5756C30.5568 20.4429 30.3192 20.3241 29.9771 20.2123L28.9641 19.898C28.4542 19.7374 28.0771 19.5 27.8466 19.1856C27.6218 18.8957 27.499 18.5397 27.4974 18.1728C27.4918 17.9024 27.5568 17.6352 27.686 17.3976C27.8108 17.1729 27.9823 16.9776 28.189 16.8249C28.4067 16.66 28.653 16.5369 28.9154 16.4615C29.2013 16.3792 29.4978 16.3393 29.7953 16.343C29.9517 16.3419 30.108 16.3512 30.2632 16.371C30.4239 16.3919 30.5706 16.4199 30.7172 16.4478C30.8569 16.4827 30.9896 16.5176 31.1153 16.5596C31.2172 16.5911 31.3155 16.6332 31.4087 16.6853C31.4909 16.7267 31.5626 16.7865 31.6182 16.8599C31.6636 16.9279 31.6857 17.0088 31.681 17.0904V17.4186C31.681 17.5653 31.6251 17.6422 31.5204 17.6422C31.4645 17.6422 31.3737 17.6143 31.255 17.5584C30.8568 17.3768 30.4098 17.286 29.914 17.286C29.5158 17.286 29.2015 17.3488 28.985 17.4816C28.7685 17.6144 28.6568 17.817 28.6568 18.1032C28.6549 18.196 28.6725 18.2881 28.7086 18.3735C28.7448 18.459 28.7985 18.5358 28.8663 18.5991C29.006 18.7318 29.2644 18.8645 29.6346 18.9833L30.6264 19.2974C31.1294 19.458 31.4925 19.6815 31.709 19.9679C31.9222 20.2488 32.0353 20.593 32.0302 20.9457C32.0339 21.2262 31.9717 21.5037 31.8487 21.7559C31.7247 21.9949 31.5508 22.2045 31.3388 22.3705C31.1082 22.55 30.8449 22.6829 30.5635 22.7617C30.24 22.8612 29.9032 22.9107 29.5647 22.9084L29.5648 22.9083Z" fill="#252F3E"/>
    <path d="M30.8849 26.3025C28.587 27.9997 25.2485 28.9006 22.3779 28.9006C18.3549 28.9008 14.73 27.4131 11.9922 24.9407C11.7757 24.745 11.9712 24.4797 12.2297 24.6332C15.191 26.3514 18.8439 27.392 22.6224 27.392C25.1717 27.392 27.9724 26.861 30.5497 25.7716C30.9338 25.597 31.2621 26.0231 30.885 26.3026L30.8849 26.3025Z" fill="#FF9900"/>
    <path d="M31.8417 25.2131C31.5483 24.8359 29.9 25.0315 29.1527 25.1223C28.9291 25.1502 28.8942 24.9546 29.0968 24.808C30.4098 23.8861 32.568 24.1514 32.8195 24.4588C33.071 24.7731 32.7496 26.9312 31.5204 27.965C31.3318 28.1256 31.1502 28.0418 31.234 27.8322C31.5134 27.1408 32.135 25.5832 31.8417 25.2131Z" fill="#FF9900"/>
    </g>
    <path d="M22.399 43.8429C10.6905 43.8429 1.19897 34.3513 1.19897 22.6429H-0.801025C-0.801025 35.4559 9.58597 45.8429 22.399 45.8429V43.8429ZM43.599 22.6429C43.599 34.3513 34.1074 43.8429 22.399 43.8429V45.8429C35.212 45.8429 45.599 35.4559 45.599 22.6429H43.599ZM22.399 1.44287C34.1074 1.44287 43.599 10.9344 43.599 22.6429H45.599C45.599 9.82986 35.212 -0.557129 22.399 -0.557129V1.44287ZM22.399 -0.557129C9.58597 -0.557129 -0.801025 9.82986 -0.801025 22.6429H1.19897C1.19897 10.9344 10.6905 1.44287 22.399 1.44287V-0.557129Z" fill="#E6E6E6"/>
    <defs>
    <clipPath id="clip0_2144_23688">
    <rect width="21" height="12.5579" fill="white" transform="translate(11.8989 16.343)"/>
    </clipPath>
    </defs>
    </svg>
  );
};