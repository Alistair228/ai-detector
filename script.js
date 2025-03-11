document.addEventListener('DOMContentLoaded', function() {
    // 獲取DOM元素
    const textInput = document.getElementById('text-input');
    const characterCount = document.getElementById('character-count');
    const checkButton = document.getElementById('check-button');
    const loader = document.getElementById('loader');
    const resultsSection = document.getElementById('results-section');
    const gaugeFill = document.getElementById('gauge-fill');
    const aiPercentage = document.getElementById('ai-percentage');
    const resultText = document.getElementById('result-text');
    const consistencyMeter = document.getElementById('consistency-meter');
    const consistencyValue = document.getElementById('consistency-value');
    const diversityMeter = document.getElementById('diversity-meter');
    const diversityValue = document.getElementById('diversity-value');
    const complexityMeter = document.getElementById('complexity-meter');
    const complexityValue = document.getElementById('complexity-value');
    const checkAnother = document.getElementById('check-another');

    // 監聽文本輸入
    textInput.addEventListener('input', function() {
        const text = this.value;
        const length = text.length;
        characterCount.textContent = length;

        // 至少需要100個字符才能啟用檢測按鈕
        if (length >= 100) {
            checkButton.classList.remove('disabled');
        } else {
            checkButton.classList.add('disabled');
        }
    });

    // 監聽檢測按鈕點擊
    checkButton.addEventListener('click', function() {
        if (this.classList.contains('disabled')) {
            return;
        }

        const text = textInput.value;
        
        // 隱藏按鈕，顯示加載器
        checkButton.style.display = 'none';
        loader.style.display = 'block';

        // 模擬檢測過程 (1-3秒隨機時間)
        setTimeout(function() {
            analyzeText(text);
        }, Math.random() * 2000 + 1000);
    });

    // 監聽"檢測另一段文本"按鈕
    checkAnother.addEventListener('click', function() {
        // 重置輸入區域
        textInput.value = '';
        characterCount.textContent = '0';
        checkButton.classList.add('disabled');
        
        // 隱藏結果區域，顯示檢測按鈕
        resultsSection.style.display = 'none';
        checkButton.style.display = 'block';
        loader.style.display = 'none';
        
        // 滾動到檢測區域
        document.querySelector('.detector').scrollIntoView({ behavior: 'smooth' });
    });

    // 分析文本(模擬)
    function analyzeText(text) {
        // 隨機生成AI相似度百分比 (0-100)
        const percentage = Math.floor(Math.random() * 101);
        
        // 隨機生成詳細指標
        const consistency = Math.floor(Math.random() * 101);
        const diversity = Math.floor(Math.random() * 101);
        const complexity = Math.floor(Math.random() * 101);
        
        // 更新儀表盤
        gaugeFill.style.height = percentage + '%';
        aiPercentage.textContent = percentage;
        
        // 更新文本結果
        if (percentage < 20) {
            resultText.textContent = '此內容極有可能是由人類撰寫的。';
            resultText.style.color = '#27ae60';
        } else if (percentage < 50) {
            resultText.textContent = '此內容可能主要由人類撰寫，但可能有少量AI輔助。';
            resultText.style.color = '#2ecc71';
        } else if (percentage < 80) {
            resultText.textContent = '此內容顯示出較強的AI特徵，可能由AI生成或有大量AI輔助。';
            resultText.style.color = '#f39c12';
        } else {
            resultText.textContent = '此內容幾乎可以確定是由AI生成的。';
            resultText.style.color = '#e74c3c';
        }
        
        // 更新詳細指標
        consistencyMeter.style.width = consistency + '%';
        consistencyValue.textContent = consistency + '%';
        
        diversityMeter.style.width = diversity + '%';
        diversityValue.textContent = diversity + '%';
        
        complexityMeter.style.width = complexity + '%';
        complexityValue.textContent = complexity + '%';
        
        // 隱藏加載器，顯示結果區域
        loader.style.display = 'none';
        resultsSection.style.display = 'block';
        
        // 滾動到結果區域
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }
});