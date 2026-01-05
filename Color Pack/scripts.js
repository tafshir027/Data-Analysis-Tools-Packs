// Open Modal
document.querySelectorAll('.tool-card').forEach(card => {
    card.addEventListener('click', () => {
      const modalId = card.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'flex';
      }
    });
  });
  
  // Close Modal
  document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
      const modal = closeBtn.closest('.modal');
      if (modal) {
        modal.style.display = 'none';
      }
    });
  });
  
  // Close Modal on Outside Click
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  
  // Initialize ClipboardJS and Color Picker
  document.addEventListener('DOMContentLoaded', () => {
    // ClipboardJS Initialization
    if (typeof ClipboardJS !== 'undefined') {
      new ClipboardJS('.copy-btn');
  
      // Show success message after copying
      document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', () => {
          const successMessage = document.getElementById('success-message');
          if (successMessage) {
            successMessage.classList.remove('hidden');
            setTimeout(() => {
              successMessage.classList.add('hidden');
            }, 2000); // Hide the message after 2 seconds
          }
        });
      });
    } else {
      console.error('ClipboardJS library is not loaded.');
    }
  
    // Color Picker Logic
    const pickColorBtn = document.querySelector('.pick-color-btn');
    const picker = document.getElementById('picker');
    const colorPreview = document.getElementById('color-preview');
  
    if (pickColorBtn && picker && colorPreview) {
      pickColorBtn.addEventListener('click', () => {
        picker.click(); // Trigger the hidden color input
      });
  
      picker.addEventListener('input', updateColor);
  
      function updateColor() {
        const selectedColor = picker.value;
  
        // Update Preview
        colorPreview.style.backgroundColor = selectedColor;
  
        // Convert to HEX
        document.getElementById('hex-code').textContent = selectedColor;
  
        // Convert to RGB
        const rgb = hexToRgb(selectedColor);
        document.getElementById('rgb-code').textContent = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  
        // Convert to RGBA
        document.getElementById('rgba-code').textContent = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`;
  
        // Convert to HSL
        const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
        document.getElementById('hsl-code').textContent = `hsl(${Math.round(hsl.h)}, ${Math.round(hsl.s)}%, ${Math.round(hsl.l)}%)`;
  
        // Convert to CMYK
        const cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);
        document.getElementById('cmyk-code').textContent = `cmyk(${Math.round(cmyk.c)}%, ${Math.round(cmyk.m)}%, ${Math.round(cmyk.y)}%, ${Math.round(cmyk.k)}%)`;
      }
  
      // Hex to RGB Conversion
      function hexToRgb(hex) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return { r, g, b };
      }
  
      // RGB to HSL Conversion
      function rgbToHsl(r, g, b) {
        r /= 255;
        g /= 255;
        b /= 255;
  
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h, s, l;
  
        l = (max + min) / 2;
  
        if (max === min) {
          h = s = 0; // achromatic
        } else {
          const d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          switch (max) {
            case r:
              h = (g - b) / d + (g < b ? 6 : 0);
              break;
            case g:
              h = (b - r) / d + 2;
              break;
            case b:
              h = (r - g) / d + 4;
              break;
          }
          h /= 6;
        }
  
        return { h: h * 360, s: s * 100, l: l * 100 };
      }
  
      // RGB to CMYK Conversion
      function rgbToCmyk(r, g, b) {
        r /= 255;
        g /= 255;
        b /= 255;
  
        const k = 1 - Math.max(r, g, b);
        const c = (1 - r - k) / (1 - k || 1);
        const m = (1 - g - k) / (1 - k || 1);
        const y = (1 - b - k) / (1 - k || 1);
  
        return {
          c: c * 100,
          m: m * 100,
          y: y * 100,
          k: k * 100,
        };
      }
    } else {
      console.error('Required elements for Color Picker are missing.');
    }
  });

  
  // Open Modal
document.querySelectorAll('.tool-card').forEach(card => {
    card.addEventListener('click', () => {
      const modalId = card.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'flex';
      }
    });
  });
  
  // Close Modal
  document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
      const modal = closeBtn.closest('.modal');
      if (modal) {
        modal.style.display = 'none';
      }
    });
  });
  
  // Close Modal on Outside Click
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  
  // Initialize ClipboardJS
  document.addEventListener('DOMContentLoaded', () => {
    new ClipboardJS('.copy-btn');
  
    const gradientType = document.getElementById('gradient-type');
    const angleInput = document.getElementById('angle');
    const colorInputsContainer = document.getElementById('color-inputs');
    const gradientPreview = document.getElementById('gradient-preview');
    const generatedCss = document.getElementById('generated-css');
    const addColorBtn = document.getElementById('add-color-btn');
  
    // Update Gradient on Input Change
    function updateGradient() {
      const colors = Array.from(document.querySelectorAll('.gradient-color')).map(input => input.value);
      const gradientTypeValue = gradientType.value;
      const angleValue = angleInput.value;
  
      let gradientStyle = '';
      if (gradientTypeValue === 'linear') {
        gradientStyle = `linear-gradient(${angleValue}deg, ${colors.join(', ')})`;
      } else if (gradientTypeValue === 'radial') {
        gradientStyle = `radial-gradient(circle, ${colors.join(', ')})`;
      }
  
      gradientPreview.style.background = gradientStyle;
      generatedCss.textContent = `background: ${gradientStyle};`;
    }
  
    // Add Event Listeners
    gradientType.addEventListener('change', updateGradient);
    angleInput.addEventListener('input', updateGradient);
  
    // Add Color Button
    addColorBtn.addEventListener('click', () => {
      const newRow = document.createElement('div');
      newRow.classList.add('color-input-row');
  
      const newColorInput = document.createElement('input');
      newColorInput.type = 'color';
      newColorInput.classList.add('gradient-color');
      newColorInput.value = '#ffffff';
  
      const removeButton = document.createElement('button');
      removeButton.classList.add('remove-color-btn');
      removeButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
  
      removeButton.addEventListener('click', () => {
        newRow.remove();
        updateGradient();
      });
  
      newRow.appendChild(newColorInput);
      newRow.appendChild(removeButton);
      colorInputsContainer.appendChild(newRow);
  
      updateGradient();
    });
  
    // Initial Gradient Update
    updateGradient();
  
    // Remove Existing Colors
    document.querySelectorAll('.remove-color-btn').forEach(button => {
      button.addEventListener('click', () => {
        button.parentElement.remove();
        updateGradient();
      });
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('color-histogram-modal');
    const closeBtn = modal.querySelector('.close');
    const uploadInput = document.getElementById('image-upload');
    const fileName = document.getElementById('file-name');
    const uploadedImage = document.getElementById('uploaded-image');
    const histogramCanvas = document.getElementById('histogram-canvas');
    const ctx = histogramCanvas.getContext('2d');
  
    // Open Modal
    document.querySelectorAll('.tool-card').forEach(card => {
      card.addEventListener('click', () => {
        const modalId = card.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.style.display = 'flex';
        }
      });
    });
  
    // Close Modal
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    // Close Modal on Outside Click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  
    // Handle Image Upload
    uploadInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      if (file) {
        fileName.textContent = file.name;
  
        const reader = new FileReader();
        reader.onload = (e) => {
          uploadedImage.src = e.target.result;
          uploadedImage.style.display = 'block';
  
          // Generate Histogram after image loads
          uploadedImage.onload = () => {
            generateHistogram(uploadedImage);
          };
        };
        reader.readAsDataURL(file);
      } else {
        fileName.textContent = 'No file selected';
        uploadedImage.style.display = 'none';
      }
    });
  
    // Generate Histogram
    function generateHistogram(image) {
      const canvas = document.createElement('canvas');
      const tempCtx = canvas.getContext('2d');
  
      // Set canvas dimensions to match image
      canvas.width = image.width;
      canvas.height = image.height;
  
      // Draw image on temporary canvas
      tempCtx.drawImage(image, 0, 0, canvas.width, canvas.height);
  
      // Get pixel data
      const imageData = tempCtx.getImageData(0, 0, canvas.width, canvas.height).data;
  
      // Initialize histogram data
      const histogram = { r: Array(256).fill(0), g: Array(256).fill(0), b: Array(256).fill(0) };
  
      // Calculate histogram
      for (let i = 0; i < imageData.length; i += 4) {
        histogram.r[imageData[i]]++;
        histogram.g[imageData[i + 1]]++;
        histogram.b[imageData[i + 2]]++;
      }
  
      // Draw histogram on canvas
      drawHistogram(histogram);
    }
  
    // Draw Histogram on Canvas
    function drawHistogram(histogram) {
      const barWidth = histogramCanvas.width / 256;
      ctx.clearRect(0, 0, histogramCanvas.width, histogramCanvas.height);
  
      // Normalize histogram values
      const maxCount = Math.max(
        ...Object.values(histogram).flat()
      );
  
      // Draw bars for each channel
      for (let i = 0; i < 256; i++) {
        const x = i * barWidth;
  
        // Red Channel
        const redHeight = (histogram.r[i] / maxCount) * histogramCanvas.height;
        ctx.fillStyle = 'rgba(255, 0, 0, 0.7)';
        ctx.fillRect(x, histogramCanvas.height - redHeight, barWidth, redHeight);
  
        // Green Channel
        const greenHeight = (histogram.g[i] / maxCount) * histogramCanvas.height;
        ctx.fillStyle = 'rgba(0, 255, 0, 0.7)';
        ctx.fillRect(x, histogramCanvas.height - greenHeight, barWidth, greenHeight);
  
        // Blue Channel
        const blueHeight = (histogram.b[i] / maxCount) * histogramCanvas.height;
        ctx.fillStyle = 'rgba(0, 0, 255, 0.7)';
        ctx.fillRect(x, histogramCanvas.height - blueHeight, barWidth, blueHeight);
      }
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('color-palette-modal');
    const closeBtn = modal.querySelector('.close');
    const baseColorInput = document.getElementById('base-color');
    const generatePaletteBtn = document.getElementById('generate-palette-btn');
  
    // Initialize ClipboardJS
    new ClipboardJS('.copy-btn');
  
    // Open Modal
    document.querySelectorAll('.tool-card').forEach(card => {
      card.addEventListener('click', () => {
        const modalId = card.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.style.display = 'flex';
        }
      });
    });
  
    // Close Modal
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    // Close Modal on Outside Click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  
    // Generate Palette
    generatePaletteBtn.addEventListener('click', () => {
      const baseColor = baseColorInput.value;
      generateColorPalette(baseColor);
    });
  
    function generateColorPalette(baseColor) {
      const rgb = hexToRgb(baseColor);
  
      // Dark Color
      const darkColor = `rgb(${rgb.r * 0.5}, ${rgb.g * 0.5}, ${rgb.b * 0.5})`;
      updatePaletteItem('dark-color', darkColor);
  
      // Light Color
      const lightColor = `rgb(${Math.min(rgb.r * 1.5, 255)}, ${Math.min(rgb.g * 1.5, 255)}, ${Math.min(rgb.b * 1.5, 255)})`;
      updatePaletteItem('light-color', lightColor);
  
      // Complementary Color
      const complementaryColor = getComplementaryColor(rgb);
      updatePaletteItem('complementary-color', complementaryColor);
  
      // Triadic Colors
      const triadicColors = getTriadicColors(rgb);
      updatePaletteItem('triadic-color-1', triadicColors[0]);
      updatePaletteItem('triadic-color-2', triadicColors[1]);
    }
  
    function updatePaletteItem(id, color) {
      const paletteItem = document.getElementById(id);
      const colorBox = paletteItem.querySelector('.color-box');
      const colorCode = paletteItem.querySelector('.color-code');
  
      colorBox.style.backgroundColor = color;
      colorCode.textContent = color;
    }
  
    function hexToRgb(hex) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return { r, g, b };
    }
  
    function getComplementaryColor(rgb) {
      const r = 255 - rgb.r;
      const g = 255 - rgb.g;
      const b = 255 - rgb.b;
      return `rgb(${r}, ${g}, ${b})`;
    }
  
    function getTriadicColors(rgb) {
      const hue = rgbToHsl(rgb.r, rgb.g, rgb.b).h;
      const triadicHue1 = (hue + 120) % 360;
      const triadicHue2 = (hue + 240) % 360;
  
      const triadicColor1 = hslToRgb(triadicHue1, 100, 50);
      const triadicColor2 = hslToRgb(triadicHue2, 100, 50);
  
      return [`rgb(${triadicColor1.r}, ${triadicColor1.g}, ${triadicColor1.b})`, `rgb(${triadicColor2.r}, ${triadicColor2.g}, ${triadicColor2.b})`];
    }
  
    function rgbToHsl(r, g, b) {
      r /= 255;
      g /= 255;
      b /= 255;
  
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let h, s, l;
  
      l = (max + min) / 2;
  
      if (max === min) {
        h = s = 0; // achromatic
      } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
      }
  
      return { h: h * 360, s: s * 100, l: l * 100 };
    }
  
    function hslToRgb(h, s, l) {
      s /= 100;
      l /= 100;
  
      const c = (1 - Math.abs(2 * l - 1)) * s;
      const x = c * (1 - Math.abs((h / 60) % 2 - 1));
      const m = l - c / 2;
  
      let r, g, b;
      if (h >= 0 && h < 60) {
        [r, g, b] = [c, x, 0];
      } else if (h >= 60 && h < 120) {
        [r, g, b] = [x, c, 0];
      } else if (h >= 120 && h < 180) {
        [r, g, b] = [0, c, x];
      } else if (h >= 180 && h < 240) {
        [r, g, b] = [0, x, c];
      } else if (h >= 240 && h < 300) {
        [r, g, b] = [x, 0, c];
      } else {
        [r, g, b] = [c, 0, x];
      }
  
      r = Math.round((r + m) * 255);
      g = Math.round((g + m) * 255);
      b = Math.round((b + m) * 255);
  
      return { r, g, b };
    }
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('color-blindness-modal');
    const closeBtn = modal.querySelector('.close');
    const uploadInput = document.getElementById('image-upload');
    const fileName = document.getElementById('file-name');
    const uploadedImage = document.getElementById('uploaded-image');
    const blindnessType = document.getElementById('blindness-type');
    const simulatedCanvas = document.getElementById('simulated-canvas');
    const downloadSimulatedBtn = document.getElementById('download-simulated-btn');
    const ctx = simulatedCanvas.getContext('2d');
  
    // Open Modal
    document.querySelectorAll('.tool-card').forEach(card => {
      card.addEventListener('click', () => {
        const modalId = card.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.style.display = 'flex';
        }
      });
    });
  
    // Close Modal
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    // Close Modal on Outside Click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  
    // Handle Image Upload
    uploadInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      if (file) {
        fileName.textContent = file.name;
  
        const reader = new FileReader();
        reader.onload = (e) => {
          uploadedImage.src = e.target.result;
          uploadedImage.style.display = 'block';
  
          // Generate Simulation after image loads
          uploadedImage.onload = () => {
            simulateColorBlindness(blindnessType.value);
          };
        };
        reader.readAsDataURL(file);
      } else {
        fileName.textContent = 'No file selected';
        uploadedImage.style.display = 'none';
      }
    });
  
    // Handle Simulation Type Change
    blindnessType.addEventListener('change', () => {
      simulateColorBlindness(blindnessType.value);
    });
  
    // Simulate Color Blindness
    function simulateColorBlindness(type) {
      const canvas = document.createElement('canvas');
      const tempCtx = canvas.getContext('2d');
  
      // Set canvas dimensions to match image
      canvas.width = uploadedImage.width;
      canvas.height = uploadedImage.height;
  
      // Draw image on temporary canvas
      tempCtx.drawImage(uploadedImage, 0, 0, canvas.width, canvas.height);
  
      // Get pixel data
      const imageData = tempCtx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
  
      // Apply color blindness simulation
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
  
        let newR = r,
          newG = g,
          newB = b;
  
        switch (type) {
          case 'protanopia':
            newR = 0.567 * r + 0.433 * g + 0 * b;
            newG = 0.558 * r + 0.442 * g + 0 * b;
            newB = 0 * r + 0.242 * g + 0.758 * b;
            break;
          case 'deuteranopia':
            newR = 0.625 * r + 0.375 * g + 0 * b;
            newG = 0.7 * r + 0.3 * g + 0 * b;
            newB = 0 * r + 0.3 * g + 0.7 * b;
            break;
          case 'tritanopia':
            newR = 0.95 * r + 0.05 * g + 0 * b;
            newG = 0 * r + 0.433 * g + 0.567 * b;
            newB = 0 * r + 0.475 * g + 0.525 * b;
            break;
          case 'achromatopsia':
            const gray = 0.299 * r + 0.587 * g + 0.114 * b;
            newR = newG = newB = gray;
            break;
          default:
            // Normal vision
            break;
        }
  
        data[i] = Math.min(255, Math.max(0, newR));
        data[i + 1] = Math.min(255, Math.max(0, newG));
        data[i + 2] = Math.min(255, Math.max(0, newB));
      }
  
      // Draw modified image on simulated canvas
      simulatedCanvas.width = canvas.width;
      simulatedCanvas.height = canvas.height;
      ctx.putImageData(imageData, 0, 0);
    }
  
    // Download Simulated Image
    downloadSimulatedBtn.addEventListener('click', () => {
      const link = document.createElement('a');
      link.href = simulatedCanvas.toDataURL('image/png');
      link.download = 'simulated-image.png';
      link.click();
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('contrast-checker-modal');
    const closeBtn = modal.querySelector('.close');
    const foregroundColorInput = document.getElementById('foreground-color');
    const backgroundColorInput = document.getElementById('background-color');
    const foregroundHexInput = document.getElementById('foreground-hex');
    const backgroundHexInput = document.getElementById('background-hex');
    const foregroundPreview = document.getElementById('foreground-preview');
    const backgroundPreview = document.getElementById('background-preview');
    const contrastRatioElement = document.getElementById('contrast-ratio');
    const wcagComplianceElement = document.getElementById('wcag-compliance');
    const textPreview = document.querySelector('.text-preview');
  
    // Open Modal
    document.querySelectorAll('.tool-card').forEach(card => {
      card.addEventListener('click', () => {
        const modalId = card.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.style.display = 'flex';
        }
      });
    });
  
    // Close Modal
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    // Close Modal on Outside Click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  
    // Update Colors and Calculate Contrast
    function updateContrast() {
      const foregroundColor = foregroundColorInput.value;
      const backgroundColor = backgroundColorInput.value;
  
      // Update Previews
      foregroundPreview.style.backgroundColor = foregroundColor;
      backgroundPreview.style.backgroundColor = backgroundColor;
      textPreview.style.color = foregroundColor;
      textPreview.style.backgroundColor = backgroundColor;
  
      // Calculate Contrast Ratio
      const ratio = calculateContrastRatio(foregroundColor, backgroundColor);
      contrastRatioElement.textContent = `${ratio}:1`;
  
      // Check WCAG Compliance
      const compliance = checkWCAGCompliance(ratio);
      wcagComplianceElement.textContent = `WCAG Compliance: ${compliance}`;
    }
  
    // Sync Color Picker and Hex Input
    function syncInputs(colorInput, hexInput) {
      colorInput.addEventListener('input', () => {
        hexInput.value = colorInput.value;
        updateContrast();
      });
  
      hexInput.addEventListener('input', () => {
        const hexValue = hexInput.value.trim();
        if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hexValue)) {
          colorInput.value = hexValue;
          updateContrast();
        }
      });
    }
  
    syncInputs(foregroundColorInput, foregroundHexInput);
    syncInputs(backgroundColorInput, backgroundHexInput);
  
    // Calculate Contrast Ratio
    function calculateContrastRatio(color1, color2) {
      const luminance1 = calculateLuminance(color1);
      const luminance2 = calculateLuminance(color2);
  
      const lighter = Math.max(luminance1, luminance2);
      const darker = Math.min(luminance1, luminance2);
  
      const contrast = (lighter + 0.05) / (darker + 0.05);
      return contrast.toFixed(2);
    }
  
    // Calculate Luminance
    function calculateLuminance(hex) {
      const rgb = hexToRgb(hex);
      const r = rgb.r / 255;
      const g = rgb.g / 255;
      const b = rgb.b / 255;
  
      const sRGB = [r, g, b].map((val) => {
        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
      });
  
      const luminance = 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
      return luminance;
    }
  
    // Hex to RGB Conversion
    function hexToRgb(hex) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return { r, g, b };
    }
  
    // Check WCAG Compliance
    function checkWCAGCompliance(ratio) {
      if (ratio >= 7) {
        return 'AAA';
      } else if (ratio >= 4.5) {
        return 'AA';
      } else if (ratio >= 3) {
        return 'AA (Large Text)';
      } else {
        return 'Fail';
      }
    }
  
    // Initial Update
    updateContrast();
  });