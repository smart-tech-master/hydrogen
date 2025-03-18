import{r as s,j as e}from"./jsx-runtime-CASrxSZM.js";const i=({data:n})=>{const[t,a]=s.useState(!1),r=()=>{a(!0)},o=()=>{a(!1)},l={backgroundImage:`url(app/assets/images/${t?n.hoveredImage:n.backgroundImage})`,backgroundSize:t?"auto 100%":"auto 90%"};return e.jsx("div",{className:`\r
          w-[100%] h-[75%]\r
          border border-[#E8E8E8] rounded-[10px]\r
          cursor-pointer bg-no-repeat bg-center bg-cover\r
        `,style:l,onMouseEnter:r,onMouseLeave:o,children:n.onSale&&e.jsx("div",{className:`\r
            w-[26%] border-2 border-[#FF0000] rounded-[2vw]\r
            p-1\r
            text-[17px]\r
            font-medium\r
            text-[#FF0000]\r
            text-center\r
            relative\r
            top-5\r
            left-6\r
          `,children:"On Sale!"})})},p=({data:n,handleClick:t})=>{const a={backgroundColor:n.color};return n.selected?e.jsx("div",{className:`aspect-[1/1] h-full p-1\r
          border-2 border-[#0A4874] rounded-[50%] flex items-center justify-center box-border`,onClick:t,children:e.jsx("div",{className:"w-full h-full rounded-full cursor-pointer",style:a})}):e.jsx("div",{className:"aspect-[1/1] h-full flex items-center justify-center",onClick:t,children:e.jsx("div",{className:"w-[70%] h-[70%] rounded-full cursor-pointer",style:a})})},g=[{title:"Plain T-shirt",brand:"Good Brand Company",price:29.52,markdownPrice:20.52,color:"#FF6633",backgroundImage:"orange.png",hoveredImage:"orange-secondary.png",onSale:!0,selected:!1},{title:"Plain T-shirt",brand:"Good Brand Company",price:30.52,markdownPrice:21.52,color:"#006600",backgroundImage:"green.png",hoveredImage:"green-secondary.png",onSale:!0,selected:!0},{title:"Plain T-shirt",brand:"Good Brand Company",price:32.52,markdownPrice:22.52,color:"#00639C",backgroundImage:"blue.png",hoveredImage:"blue-secondary.png",onSale:!0,selected:!1},{title:"Plain T-shirt",brand:"Good Brand Company",price:33.52,markdownPrice:23.52,color:"#FCE78D",backgroundImage:"yellow.png",hoveredImage:"yellow-secondary.png",onSale:!0,selected:!1},{title:"Plain T-shirt",brand:"Good Brand Company",price:34.52,markdownPrice:24.52,color:"#FFCCFF",backgroundImage:"pink.png",hoveredImage:"pink-secondary.png",onSale:!0,selected:!1},{title:"Plain T-shirt",brand:"Good Brand Company",price:35.52,markdownPrice:25.52,color:"#19264B",backgroundImage:"blue.png",hoveredImage:"blue-secondary.png",onSale:!0,selected:!1}];function x(){const[n,t]=s.useState([...g]),a=o=>{const l=n.map((d,c)=>c===o?{...d,selected:!0}:{...d,selected:!1});t(l)},[r]=n.filter(o=>o.selected);return e.jsx("div",{className:"container w-full h-screen flex items-center justify-center bg-black",children:e.jsx("div",{className:"w-[98%] md:w-[50%] lg:w-[30%] aspect-[11/15] bg-white",children:e.jsx("div",{className:"w-[100%] h-[100%] pt-[6%] pb-[6%] pl-[7%] pr-[7%]",children:e.jsxs("div",{className:"w-[100%] h-[100%]",children:[e.jsx(i,{data:r}),e.jsxs("div",{className:"w-[100%] h-[25%]",children:[e.jsx("div",{className:`
                w-[100%] h-[20%] mt-[4%]
                flex items-center gap-1.5`,children:n.map((o,l)=>e.jsx(p,{data:o,handleClick:()=>a(l)},l))}),e.jsx("div",{className:`
                mt-[4%]
                font-roboto font-normal text-[14px] leading-[16px] tracking-[0%]
                md:text-[16px] md:leading-[18px] lg:text-[18px] lg:leading-[20px]
              `,children:r.brand}),e.jsx("div",{className:`
                mt-[2%]
                font-roboto font-medium text-[16px] leading-[18px] tracking-[0%]
                md:text-[18px] md:leading-[20px] lg:text-[20px] lg:leading-[22px]
                text-[#0A4874]
              `,children:r.title}),e.jsxs("div",{className:"mt-[2%] w-[100%] flex items-center gap-2",children:[r.onSale&&e.jsx("div",{className:`
                    font-roboto font-normal text-[14px] leading-[16px] tracking-[0%]
                    line-through md:text-[16px] md:leading-[18px] lg:text-[18px] lg:leading-[20px]
                  `,children:`$${r.price}`}),e.jsx("div",{className:`
                font-roboto font-normal text-[14px] leading-[16px] tracking-[0%] text-center
                md:text-[16px] md:leading-[18px] lg:text-[18px] lg:leading-[20px] text-[#FF0000]
                `,children:`$${r.markdownPrice}`})]})]})]})})})})}export{x as default};
