  // Дані для 12 груп
  const groups = [
    {
      outputId: "green-count-cell1",
      cellIds: [        
        'q1yes','q13yes','q25yes','q37yes','q49b','q50b','q51yes','q63yes','q75yes','q87yes','q99c','q100a','q101yes','q113yes','q125no','q137yes','q149b','q150b','q151yes','q163yes','q175yes','q187yes','q199a','q200a']
    },
    {
        outputId: "green-count-cell2",
      cellIds: [
        'q2yes','q14yes','q26yes','q38yes','q49a','q50a','q52yes','q71yes','q76yes','q88yes','q99a','q100e','q102yes','q114yes','q126yes','q138yes','q149a','q150a','q152yes','q164yes','q176yes','q188yes','q199b','q200b']
    },
    {
        outputId: "green-count-cell3",
      cellIds: [
        'q3yes','q15yes','q27yes','q39yes','q49c','q50c','q53yes','q65yes','q77yes','q89no','q99b','q100b','q103yes','q115yes','q127yes','q139yes','q149c','q150c','q153yes','q165yes','q177yes','q189yes','q195yes','q200c']
    },
    {
        outputId: "green-count-cell4",
      cellIds: [        
        'q4yes','q16yes','q28yes','q40yes','q49e','q50d','q54yes','q66yes','q78no','q90yes','q99d','q100d','q104yes','q116yes','q128yes','q140yes','q149f','q150d','q154yes','q166yes','q178yes','q190yes','q199c','q200d']
    },
    {
        outputId: "green-count-cell5",
      cellIds: [        
        'q5yes','q17yes','q29yes','q37yes','q41yes','q49f','q55yes','q59yes','q67yes','q79yes','q91yes','q99e','q105yes','q117yes','q129yes','q141yes','q149e','q150b','q155yes','q165yes','q167yes','q179yes','q191yes','q200f']
    },
    {
        outputId: "green-count-cell6",
      cellIds: [        
        'q6yes','q18yes','q30yes','q42yes','q49d','q50e','q56yes','q68no','q80yes','q87yes','q92yes','q100c','q106yes','q118yes','q130yes','q142no','q149d','q150f','q156yes','q168yes','q180yes','q192yes','q199f','q200f']
    },
    {
        outputId: "green-count-cell7",
      cellIds: [        
        'q7yes','q19yes','q22yes','q24yes','q31yes','q43yes','q56yes','q57yes','q69yes','q81yes','q93yes','q94yes','q107yes','q119yes','q127yes','q131yes','q143yes','q150e','q157yes','q169no','q171yes','q181yes','q193yes','q200e']
    },
    {
        outputId: "green-count-cell8",
      cellIds: [        
        'q8yes','q17yes','q20yes','q32yes','q44yes','q49e','q58yes','q70yes','q82no','q84yes','q86yes','q94yes','q108yes','q118yes','q120yes','q132yes','q144no','q150a','q158yes','q167yes','q170yes','q182yes','q184yes','q194yes']
    },
    {
        outputId: "green-count-cell9",
      cellIds: [        
        'q9yes','q15no','q21no','q33no','q45yes','q49a','q71yes','q72yes','q83yes','q95yes','q96yes','q99f','q109yes','q120yes','q121yes','q133no','q142no','q145yes','q159yes','q161yes','q171yes','q173yes','q183no','q199d']
    },
    {
        outputId: "green-count-cell10",
      cellIds: [        
        'q10yes','q21no','q22yes','q34yes','q46yes','q49d','q60no','q65yes','q68no','q72yes','q84yes','q96yes','q107yes','q110yes','q117yes','q122yes','q134yes','q146yes','q160yes','q172yes','q180yes','q184yes','q196yes','q200e']
    },
    {
        outputId: "green-count-cell11",
      cellIds: [        
        'q2yes','q11yes','q23yes','q35yes','q47yes','q50e','q61yes','q64yes','q73yes','q85yes','q97yes','q100f','q111no','q123yes','q128yes','q135yes','q140yes','q147yes','q161yes','q173yes','q176yes','q185yes','q197yes','q199e']
    },
    {
        outputId: "green-count-cell12",
      cellIds: [        
        'q7yes','q12yes','q24yes','q36yes','q43yes','q48yes','q57yes','q62yes','q74yes','q81yes','q86yes','q98yes','q104yes','q112yes','q124no','q136yes','q148yes','q150d','q153yes','q162yes','q166yes','q174yes','q186yes','q198yes']
    }
  ];
  console.log(groups)

  document.addEventListener("DOMContentLoaded", function () {
    const radios = document.querySelectorAll('input[type="radio"]');

    radios.forEach(function (radio) {
      const savedValue = localStorage.getItem(radio.name);
      if (savedValue && radio.value === savedValue) {
        radio.checked = true;
      }

      radio.addEventListener("change", function (event) {
        localStorage.setItem(event.target.name, event.target.value);
        updateCellColors();
        updateGreenStatus();
      });
    });

    updateCellColors();
    updateGreenStatus();
  });

  function updateCellColors() {
    const allCells = document.querySelectorAll(".cell_name, .underline");
    allCells.forEach(cell => cell.style.backgroundColor = "lightcoral");
  
    const checkedRadios = document.querySelectorAll('input[type="radio"]:checked');
    checkedRadios.forEach(radio => {
      const cellId = radio.getAttribute("data-cell-id");
      const relatedCells = document.querySelectorAll(
        `[data-cell-id="${cellId}"]`
      );
      relatedCells.forEach(cell => {
        cell.style.backgroundColor = "lightgreen";
      });
    });
      // ⬅️ додано: оновлення після зміни кольору
    updateGreenStatus();
  }

  function isLightGreen(color) {
    return color === 'rgb(144, 238, 144)';
  }

  function updateGreenStatus() {
    groups.forEach(group => {
      let greenCount = 0;
  
      group.cellIds.forEach(id => {
        const cells = document.querySelectorAll(`[data-cell-id="${id}"]`);
        let isAnyGreen = false;
  
        cells.forEach(cell => {
          const bgColor = window.getComputedStyle(cell).backgroundColor;
          if (isLightGreen(bgColor)) {
            isAnyGreen = true;
          }
        });
  
        if (isAnyGreen) {
          greenCount++;
        }
      });
  
      const resultCell = document.getElementById(group.outputId);
      if (resultCell) {
        const percent = Math.round((greenCount / group.cellIds.length) * 100);
  
        resultCell.innerHTML = `
          <div class="progress-wrapper">
            <div class="progress-bar" style="width: ${percent}%;"></div>
            <div class="progress-text">${greenCount} / ${group.cellIds.length}</div>
          </div>
        `;
      }
    });
  }

  document.getElementById("resetSelections").addEventListener("click", function () {
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
      localStorage.removeItem(radio.name);
      radio.checked = false;
    });

    const allCells = document.querySelectorAll(".cell_name, .underline");
    allCells.forEach(cell => {
      cell.style.backgroundColor = "";
    });
  });
