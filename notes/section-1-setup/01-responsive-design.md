## What is responsive design

- design tachnique to make a webpage adjust its layout and visual style to any possiable screen size (window or viewport size)
- In practice, this means that responsive design makes website usable on all **devices, such a desktop,compoters, tablets and mobile phones**
- its set of practic. **not a separate technology**. its all CSS

## Responsive Desing ingredients

1. **Fuild Layout**

   - to allow webpage to adapt to the current viewport width (or even height)
   - Use % (or vh/ vw) unit instead of px for elements that should adapt to viewport (usually layout)
   - Use max-width instead of width

2. **Responsive Units**

   - Use rem unit instead of px of most lenghts
   - To make it easy to scale the entire layout down (or up) Utomatically
   - setting 1rem to px for easy calculations

3. **Flexiable Images**

   - By default, images dont sacle automaticaly as we change the viewport, so we need fix that
   - Always use % for image dimensions, togheter with the max-width property

4. **Media Query**

   Bring responsive sites to file!
   To Change CSS style on cerain viewport width (called breakpoints)
