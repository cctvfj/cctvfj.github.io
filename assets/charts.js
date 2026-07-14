(function() {
    var style = getComputedStyle(document.documentElement);
    var accent = style.getPropertyValue('--primary').trim() || '#1a5f2a';
    var accent2 = style.getPropertyValue('--primary-light').trim() || '#2d8a4e';
    var ink = style.getPropertyValue('--ink').trim() || '#1a1a1a';
    var muted = style.getPropertyValue('--muted').trim() || '#666666';
    var rule = style.getPropertyValue('--rule').trim() || '#e0e8e0';
    var bg2 = style.getPropertyValue('--bg2').trim() || '#ffffff';

    // --- Chart: Mineral Comparison ---
    var chartMineral = echarts.init(document.getElementById('chart-mineral'), null, { renderer: 'svg' });

    var mineralOption = {
        animation: false,
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' },
            appendToBody: true,
            backgroundColor: 'rgba(255,255,255,0.95)',
            borderColor: rule,
            textStyle: { color: ink }
        },
        legend: {
            data: ['洋溪半路洋', '盖洋际下'],
            top: 0,
            textStyle: { color: muted }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '15%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['偏硅酸', '钙', '镁', '锶', '钠', '钒'],
            axisLine: { lineStyle: { color: rule } },
            axisLabel: { color: muted, fontSize: 12 }
        },
        yAxis: {
            type: 'value',
            name: 'mg/L',
            nameTextStyle: { color: muted },
            axisLine: { show: false },
            axisTick: { show: false },
            splitLine: { lineStyle: { color: '#f0f0f0' } },
            axisLabel: { color: muted }
        },
        series: [
            {
                name: '洋溪半路洋',
                type: 'bar',
                data: [45.4, 56.4, 3.04, 0.0997, 6.77, 0.000851],
                itemStyle: { color: accent, borderRadius: [4, 4, 0, 0] },
                barWidth: '28%'
            },
            {
                name: '盖洋际下',
                type: 'bar',
                data: [51.5, 12.4, 8.77, 0.125, 4.33, 0.00617],
                itemStyle: { color: accent2, borderRadius: [4, 4, 0, 0] },
                barWidth: '28%'
            }
        ]
    };

    chartMineral.setOption(mineralOption);
    window.addEventListener('resize', function() { chartMineral.resize(); });
})();
