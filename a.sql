SELECT
  speed     AS x,
  soc       AS y,  -- State of Charge (Battery %)
  altitude  AS z
FROM vehicle_tracking_fiware
WHERE vehicle_id = 'musoshi001'
ORDER BY timestamp ASC
LIMIT 3000