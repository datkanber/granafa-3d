FROM grafana/grafana:latest

USER root

RUN grafana-cli plugins install ae3e-plotly-panel

USER grafana
